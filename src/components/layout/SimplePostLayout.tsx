import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { Comments } from "@/components/Comments";
import "@/styles/prism-darcula.css";
import "@/styles/prism.css";
import { H2 } from "../typo/heading";

// Post 타입 컨텐츠
export const SimplePostLayout = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post?.body?.code);
  return (
    <div className="px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 prose">
      <title>{post.title}</title>
      <article>
        <div>
          <H2>{post.title}</H2>
          <time dateTime={post.publishedAt}>
            {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
          </time>
        </div>
        <MDXContent />
        <div className="pt-8" />
        <Comments />
      </article>
    </div>
  );
};
