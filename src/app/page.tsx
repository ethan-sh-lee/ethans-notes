import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "./components/PostCard";

//메인 화면
//포스트 카드와 포스트 리스트로 블로그 글을 탐색할 수 있도록 함

async function getData() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return posts;
}

export default async function Home() {
  const posts = await getData();
  return (
    <div className="text-center">
      <title>Ethan&#39;s Notes</title>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
