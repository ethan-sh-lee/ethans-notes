import { Note, Post } from "contentlayer/generated";
import { H4 } from "@/components/typo/heading";
import { Paragraph } from "@/components/typo/paragraphs";

export default function PostCard(post: Post | Note) {
  return (
    <div
      className="w-full py-4 dark:px-4 rounded bg-white dark:bg-gray-800 dark:border-gray-700
     hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
    >
      <div className="bg-white rounded-lg dark:bg-gray-800">
        <H4>{post.title}</H4>
        <div className="pt-2" />
        <Paragraph>{post.description}</Paragraph>
      </div>
    </div>
  );
}
