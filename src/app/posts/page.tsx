import { allPosts } from "contentlayer/generated";
import PostCard from "../components/PostCard";
import { compareDesc } from "date-fns";

async function getData() {
  const posts = allPosts
    .filter((post) => {
      console.log(post._raw.sourceFileDir);
      return post._raw.sourceFileDir == "posts";
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return posts;
}
export default async function Misc() {
  const posts = await getData();
  return (
    <div className="mx-auto max-w-4xl">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
