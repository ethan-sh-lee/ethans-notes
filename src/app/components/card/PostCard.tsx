import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";

export default function PostCard(post: Post) {
  return (
    <>
      <time dateTime={post.publishedAt} className="block text-sm text-slate-600">
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>
      <h2 className="text-3xl font-bold">
        {post.title}
      </h2 >
    </>
  );
}
