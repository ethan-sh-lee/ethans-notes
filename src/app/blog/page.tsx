import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { PageHeading } from "@/components/typo/PageHeading";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import PostDateCard from "@/components/card/PostDateCard";

function getData() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });
  return posts;
}
export default function Blog() {
  const posts = getData();
  return (
    <PageLayout>
      <PageHeading
        head="블로그"
        summary="개발, 기술, 스타트업, 기업문화, 제품에 대한 나의 생각을 포스팅합니다."
      />
      <div className="mt-4" />
      {posts.map((post, index) => (
        <Link key={index} href={post.url.replace("/posts", "")}>
          <PostDateCard {...post} />
        </Link>
      ))}
    </PageLayout>
  );
}
