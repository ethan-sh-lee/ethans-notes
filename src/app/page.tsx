import { Inter } from "next/font/google";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return posts;
}

function PostCard(post: Post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Link className="text-3xl font-bold underline" href={post.url}>
          {post.title}
        </Link>
      </h2>
    </div>
  );
}

export default async function Home() {
  const posts = await getData();
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <title>Contentlayer Blog Example</title>
      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
