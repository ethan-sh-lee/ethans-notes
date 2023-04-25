import { allPosts } from "contentlayer/generated";
import PostCard from "@/app/components/card/PostCard";
import { compareDesc } from "date-fns";
import { PageHeading } from "@/app/components/typo/PageHeading";
import { PageLayout } from "@/app/components/layout/PageLayout";
import Link from "next/link";

async function getData() {
  const posts = allPosts
    .filter((post) => {
      return post._raw.sourceFileDir == "posts/blog";
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
  return posts;
}
export default async function Blog() {
  const posts = await getData();
  return (
    <PageLayout>
      <PageHeading head="블로그" summary="개발, 기술, 스타트업, 기업문화, 제품에 대한 나의 생각을 포스팅합니다." />
      <div className="mt-4" />
      {posts.map((post, index) => (
        <Link key={index} href={post.url.replace("/posts", "")}>
          <PostCard {...post} />
        </Link>
      ))}
    </PageLayout>
  );
}
