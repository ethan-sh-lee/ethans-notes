import { Note, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import Comments from "@/components/Comments";
import { H2 } from "@/components/typo/heading";
import { PostFooter } from "@/components/nav/PostFooter";

// Post 타입 컨텐츠
export const PostLayout = ({
  post,
  prevPost,
  nextPost,
}: {
  post: Post | Note;
  prevPost: RelatedPost | null;
  nextPost: RelatedPost | null;
}) => {
  const MDXContent = useMDXComponent(post?.body?.code);
  return (
    <div className="px-2 mx-auto max-w-screen-lg py-2 lg:py-4 prose-sm md:prose dark:prose-invert">
      <title>{post.title}</title>
      <article>
        <div>
          <H2>{post.title}</H2>
          <time dateTime={post.publishedAt}>
            {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
          </time>
        </div>
        <MDXContent />
        <div className="pt-2" />
        <PostFooter prevPost={prevPost} nextPost={nextPost} />
        <div className="pt-8" />
        <Comments />
      </article>
    </div>
  );
};
