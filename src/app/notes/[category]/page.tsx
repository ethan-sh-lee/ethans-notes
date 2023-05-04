import { noteCategories } from "@/const/menu";
import { allNotes } from "contentlayer/generated";
import compareDesc from "date-fns/compareDesc";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeading } from "@/components/typo/PageHeading";
import PostCard from "@/components/card/PostCard";
import Link from "next/link";
import PostDateCard from "@/components/card/PostDateCard";

const PostLayout = ({
  params,
}: {
  params: {
    category: string;
  };
}) => {
  const notes = allNotes
    .filter((note) => {
      return note.category == params.category;
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });

  const cate: Category = noteCategories.filter((c) => {
    return c.category == params.category;
  })[0];

  return (
    <PageLayout>
      <PageHeading head={cate?.title} summary={cate?.description} />
      <div className="mt-8" />
      <div className="flex flex-col gap-2">
        {notes.map((note, index) => (
          <Link key={index} href={note.url}>
            <PostDateCard {...note} />
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default PostLayout;
