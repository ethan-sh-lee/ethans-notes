import PostCard from "@/components/post-card";
import { PageHeading } from "@/components/page-heading";
import { posts } from "#site/content";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Tag } from "@/components/tag";

export default async function Blog() {
  const sortedPosts = sortPosts(posts.filter((post) => post.isPublished));
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="py-4 mx-auto max-w-4xl">
      <PageHeading
        head="블로그"
        summary="알고리즘, 웹개발 등을 포스팅합니다."
      />
      <div className="mt-4" />
      <hr />
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          {sortedPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {sortedPosts.map((post) => (
                <li className="py-2" key={post.slug}>
                  <PostCard
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    publishedAt={new Date(post.publishedAt)}
                    tags={post.tags}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>Nothing to see here</p>
          )}
        </div>
        <div className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <div className="flex flex-wrap gap-2 mt-6">
            {sortedTags?.map((tag) => (
              <Tag name={tag} key={tag} count={tags[tag]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
