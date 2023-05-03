import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { PostLayout } from "@/components/layout/PostLayout";
import { compareDesc } from "date-fns";

type PageProps = {
  params: {
    url: string;
    path: string;
  };
};

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPosts.map(({ url, path }) => {
    return {
      path: path,
      url: url,
    };
  });
}

const PostPage = ({ params }: PageProps) => {
  const allPostsFromBlog = allPosts
    .filter(({ url }) => {
      return url.replaceAll("/posts", "").includes("/blog");
    })
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    );

  const post = allPostsFromBlog.find(({ url }) => {
    return url.replaceAll("/posts/blog/", "") === params.url;
  });

  const postIndex = allPostsFromBlog.findIndex(({ url }) => {
    return url.replaceAll("/posts/blog/", "") === params.url;
  });
  console.log(postIndex);
  if (postIndex === -1) {
    return notFound();
  }

  const prevFull = allPostsFromBlog[postIndex + 1] || null;
  const prevPost: RelatedPost | null = prevFull
    ? { title: prevFull.title, href: `${prevFull.path}/${prevFull.slug}` }
    : null;
  const nextFull = allPostsFromBlog[postIndex - 1] || null;
  const nextPost: RelatedPost | null = nextFull
    ? { title: nextFull.title, href: `${nextFull.path}/${nextFull.slug}` }
    : null;

  if (!post) {
    notFound();
  }

  return <PostLayout post={post} prevPost={prevPost} nextPost={nextPost} />;
};

export default PostPage;
