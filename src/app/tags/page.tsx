import { posts } from "#site/content";
import { PageHeading } from "@/components/page-heading";
import Tag from "@/components/tag";
import { getAllTags, sortTagsByCount } from "@/lib/utils";

export default async function TagsPage() {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="py-4 mx-auto max-w-4xl">
      <PageHeading head="태그" summary="블로그 글 태그 모음" />
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {sortedTags?.map((tag) => (
          <Tag name={tag} count={tags[tag]} key={tag} />
        ))}
      </div>
    </div>
  );
}
