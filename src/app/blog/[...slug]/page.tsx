import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import Comments from "@/components/comments";

type PageProps = {
  params: {
    slug: string[];
  };
};

async function getPostFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

const PostPage = async ({ params }: PageProps) => {
  const post = await getPostFromParams(params);

  if (!post || !post.isPublished) {
    notFound();
  }

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      {/*
      <div className="flex gap-2 mb-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      */}
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <div className="my-4" />
      <MDXContent code={post.content} />
      <Comments />
    </article>
  );
};

export default PostPage;
