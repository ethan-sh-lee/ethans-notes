import { posts } from "#site/content";
import { PageHeading } from "@/components/page-heading";
import PostCard from "@/components/post-card";
import Tag from "@/components/tag";
import {
  getAllTags,
  getPostsByTag,
  sortPosts,
  sortTagsByCount,
} from "@/lib/utils";

type TagPageProps = {
  params: {
    tag: string;
  };
};

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: tag }));
  return paths;
};

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = params;

  const postsByTag = getPostsByTag(posts, tag);
  const sortedPosts = sortPosts(postsByTag.filter((post) => post.isPublished));
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="py-4 mx-auto max-w-4xl">
      <PageHeading head={tag.toUpperCase()} />
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
            {sortedTags?.map((t) => (
              <Tag name={t} key={t} count={tags[t]} isCurrent={t === tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
