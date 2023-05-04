import { Note, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { Comments } from "@/components/Comments";
import "@/styles/prism-darcula.css";
import "@/styles/prism.css";
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
    <div className="px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 prose dark:prose-invert">
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
