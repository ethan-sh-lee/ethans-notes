import PostCard from "@/components/post-card";
import { PageHeading } from "@/components/page-heading";
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";

export default async function Blog() {
  const sortedPosts = sortPosts(posts.filter((post) => post.isPublished));

  return (
    <div className="py-4 mx-auto max-w-4xl">
      <PageHeading
        head="블로그"
        summary="알고리즘, 웹개발 등을 포스팅합니다."
      />
      <div className="mt-4" />
      {sortedPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {sortedPosts.map((post) => (
            <li className="py-2" key={post.slug}>
              <PostCard
                slug={post.slug}
                title={post.title}
                description={post.description}
                publishedAt={new Date(post.publishedAt)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing to see here</p>
      )}
    </div>
  );
}
