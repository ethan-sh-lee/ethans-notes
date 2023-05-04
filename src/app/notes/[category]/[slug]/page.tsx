import { notFound } from "next/navigation";
import { Note, allNotes } from "contentlayer/generated";
import { PostLayout } from "@/components/layout/PostLayout";
import { compareDesc } from "date-fns";

export async function generateStaticParams({
  params: { category },
}: {
  params: { category: string };
}) {
  return allNotes
    .filter((note: Note) => note.category === category)
    .map((note: Note) => {
      return {
        slug: note.slug,
      };
    });
}

const PostPage = ({
  params,
}: {
  params: { category: string; slug: string };
}) => {
  const allPostsFromCategory = allNotes
    .filter(({ category }) => {
      return category === params.category;
    })
    .sort((a, b) => compareDesc(a.id, b.id));

  const post = allPostsFromCategory.find(({ slug }) => {
    return slug === params.slug;
  });

  const postIndex = allPostsFromCategory.findIndex(({ slug }) => {
    return slug === params.slug;
  });

  if (postIndex === -1) {
    return notFound();
  }

  const prevFull = allPostsFromCategory[postIndex + 1] || null;
  const prevPost: RelatedPost | null = prevFull
    ? { title: prevFull.title, href: prevFull.url }
    : null;
  const nextFull = allPostsFromCategory[postIndex - 1] || null;
  const nextPost: RelatedPost | null = nextFull
    ? { title: nextFull.title, href: nextFull.url }
    : null;

  if (!post) {
    notFound();
  }

  return <PostLayout post={post} prevPost={prevPost} nextPost={nextPost} />;
};

export default PostPage;
