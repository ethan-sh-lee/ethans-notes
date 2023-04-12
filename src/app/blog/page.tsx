import { allPosts } from "contentlayer/generated";
import PostCard from "../components/PostCard";
import { compareDesc } from "date-fns";

async function getData() {
  const posts = allPosts
    .filter((post) => {
      return post._raw.sourceFileDir == "posts/blog";
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
      <h2 className="text-4xl font-extrabold dark:text-white">블로그</h2>
      <p className="my-4 text-lg text-gray-500">개발, 기술, 스타트업, 기업문화, 제품에 대한 나의 생각을 포스팅합니다.</p>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
