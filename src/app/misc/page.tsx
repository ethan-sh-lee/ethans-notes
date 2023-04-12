import { allPosts } from "contentlayer/generated";
import PostCard from "../components/PostCard";
import { compareDesc } from "date-fns";

async function getData() {
  const posts = allPosts
    .filter((post) => {
      return post._raw.sourceFileDir == "posts/misc";
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return posts;
}
export default async function Misc() {
  const posts = await getData();
  return (
    <div className="pt-4 mx-auto max-w-4xl">
      <h2 className="text-4xl font-extrabold dark:text-white">기타 등등</h2>
      <p className="my-4 text-lg text-gray-500">어디에도 속하지 않는 잡동사니 메모장입니다.</p>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
