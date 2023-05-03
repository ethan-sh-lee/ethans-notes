import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { PostLayout } from "@/components/layout/PostLayout";
import { noteCategories } from "@/const/menu";
import { compareDesc } from "date-fns";

type PageProps = {
  params: {
    category: string;
    slug: string;
  };
};

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const slugs = allPosts
    .filter(({ path }) => {
      return noteCategories.find(({ href }) => {
        href == path;
      });
    })
    .map(({ path, slug }) => {
      return {
        category: path,
        slug: slug,
      };
    });
  return slugs;
}

const PostPage = ({ params }: PageProps) => {
  const allPostsFromCategory = allPosts
    .filter(({ url }) => {
      return url.replaceAll(`/posts/notes/`, "").includes(params.category);
    })
    .sort((a, b) => compareDesc(a.id!, b.id!));

  const post = allPostsFromCategory.find(({ url }) => {
    return (
      url.replaceAll(`/posts/notes/${params.category}/`, "") === params.slug
    );
  });

  const postIndex = allPostsFromCategory.findIndex(({ url }) => {
    return (
      url.replaceAll(`/posts/notes/${params.category}/`, "") === params.slug
    );
  });

  if (postIndex === -1) {
    return notFound();
  }

  const prevFull = allPostsFromCategory[postIndex + 1] || null;
  const prevPost: RelatedPost | null = prevFull
    ? { title: prevFull.title, href: `${prevFull.path}/${prevFull.slug}` }
    : null;
  const nextFull = allPostsFromCategory[postIndex - 1] || null;
  const nextPost: RelatedPost | null = nextFull
    ? { title: nextFull.title, href: `${nextFull.path}/${nextFull.slug}` }
    : null;

  if (!post) {
    notFound();
  }

  return <PostLayout post={post} prevPost={prevPost} nextPost={nextPost} />;
};

export default PostPage;
