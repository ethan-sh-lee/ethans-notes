import { allPosts } from "contentlayer/generated";
import PostCard from "../components/card/PostCard";
import { compareDesc } from "date-fns";
import { PageHeading } from "../components/typo/PageHeading";
import { PageLayout } from "../components/layout/PageLayout";

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
    <PageLayout>
      <PageHeading head="잡동사니" summary="어디에도 속하지 않는 잡동사니 메모장입니다." />
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </PageLayout>
  );
}
