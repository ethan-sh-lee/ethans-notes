import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

type PageProps = {
  params: {
    url: string;
  };
};

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPosts.map(({ url }) => ({
    url: url,
  }));
}

const PostLayout = ({ params }: PageProps) => {
  const post = allPosts.find(
    ({ url }) => url.replaceAll("/posts/", "") == params.url
  );
  if (!post) {
    notFound();
  }

  return (
    <>
      <title className="text-3xl font-bold underline">{post.title}</title>
      <article>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <h1>{post.title}</h1>
          <time dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </>
  );
};

export default PostLayout;
