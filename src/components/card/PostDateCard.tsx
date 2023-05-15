import { format, parseISO } from "date-fns";
import { Note, Post } from "contentlayer/generated";
import { H4 } from "../typo/heading";
import { Paragraph, XSParagraph } from "../typo/paragraphs";

export default function PostCard(post: Post | Note) {
  return (
    <div
      className="w-full py-4 dark:px-4 rounded bg-white dark:bg-gray-800 dark:border-gray-700
      dark:hover:bg-gray-700 cursor-pointer"
    >
      <div className="hover:underline">
        <H4>{post.title}</H4>
      </div>
      <XSParagraph>{`${format(parseISO(post.publishedAt), "LLLL d, yyyy")}${
        Math.ceil(post.readingTime["minutes"]) >= 1
          ? ` · ${post.readingTime["text"]}`
          : ""
      }`}</XSParagraph>
      <div className="pt-2" />
      <Paragraph>{post.description}</Paragraph>
    </div>
  );
}
