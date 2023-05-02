import { noteCategories } from "@/const/menu";
import { allPosts } from "contentlayer/generated";
import compareDesc from "date-fns/compareDesc";
import { PageLayout } from "@/app/components/layout/PageLayout";
import { PageHeading } from "@/app/components/typo/PageHeading";
import PostCard from "@/app/components/card/PostCard";
import Link from "next/link";

type PageProps = {
  params: {
    category: string;
  };
};

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return noteCategories.map((category) => ({
    category: category.href,
  }));
}

const PostLayout = ({ params }: PageProps) => {
  const posts = allPosts
    .filter((post) => {
      return post._raw.sourceFileDir == `posts/notes/${params.category}`;
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
  const cate: Category = noteCategories.filter((c) => {
    return c.href == `/notes/${params.category}`;
  })[0];

  return (
    <PageLayout>
      <PageHeading head={cate?.title} summary={cate?.description} />
      <div className="mt-8" />
      <div className="flex flex-col gap-2">
        {posts.map((post, index) => (
          <Link key={index} href={post.url.replace("/posts", "")}>
            <PostCard {...post} />
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default PostLayout;
