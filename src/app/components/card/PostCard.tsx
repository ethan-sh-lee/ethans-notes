import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import { H6 } from "../typo/heading";
import { Paragraph } from "../typo/paragraphs";

export default function PostCard(post: Post) {
  return (
    <div className="w-full p-4 rounded bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="bg-white rounded-lg dark:bg-gray-800">
        <H6>{post.title}</H6>
        <Paragraph>{post.description}</Paragraph>
      </div>
    </div>
  );
}
