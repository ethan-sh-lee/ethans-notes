import { HeadTypography, TypographyH2 } from "@/components/typograhpy";
import Link from "next/link";
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import PostCard from "@/components/post-card";

const Home = () => {
  const latestPosts = sortPosts(posts).slice(0, 5);

  return (
    <div className="pt-20 mx-auto max-w-4xl">
      <title>Ethan&#39;s Notes</title>
      <div className="grid place-items-center">
        <HeadTypography>Hi, I`m Ethan Lee.</HeadTypography>
        <p className="max-w-lg pt-10 text-xl md:text-2xl  font-light text-black dark:text-white ">
          안녕하세요, 개발자 Ethan Lee입니다. 학습한 것을 내 것으로 만들고
          지속적으로 발전시키기 위해 블로그를 운영하고 있습니다.
        </p>
      </div>
      <div className="pt-10" />
      <div className="flex flex-col gap-4 justify-center sm:flex-row">
        <Link
          href="/blog"
          className={
            "bg-black text-white dark:bg-slate-100 dark:text-slate-900 dark:font-bold inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 py-2 shadow w-full sm:w-fit"
          }
        >
          View my blog
        </Link>
      </div>

      <div className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-80">
        <TypographyH2>Latest Posts</TypographyH2>
        <ul className="flex flex-col">
          {latestPosts.map(
            (post) =>
              post.isPublished && (
                <li
                  key={post.slug}
                  className="first:border-t first:border-border"
                >
                  <PostCard
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    publishedAt={new Date(post.publishedAt)}
                    tags={post.tags}
                  />
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};
export default Home;
