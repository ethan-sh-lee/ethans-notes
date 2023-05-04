import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { PostLayout } from "@/components/layout/PostLayout";
import { compareDesc } from "date-fns";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPosts.map(({ slug }) => {
    return {
      slug: slug,
    };
  });
}

const PostPage = ({ params }: PageProps) => {
  const allPostsDesc = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  const post = allPostsDesc.find(({ slug }) => {
    return slug === params.slug;
  });

  const postIndex = allPostsDesc.findIndex(({ slug }) => {
    return slug === params.slug;
  });

  if (postIndex === -1) {
    return notFound();
  }

  const prevFull = allPostsDesc[postIndex + 1] || null;
  const prevPost: RelatedPost | null = prevFull
    ? { title: prevFull.title, href: prevFull.url }
    : null;
  const nextFull = allPostsDesc[postIndex - 1] || null;
  const nextPost: RelatedPost | null = nextFull
    ? { title: nextFull.title, href: nextFull.url }
    : null;

  if (!post) {
    notFound();
  }

  return <PostLayout post={post} prevPost={prevPost} nextPost={nextPost} />;
};

export default PostPage;
