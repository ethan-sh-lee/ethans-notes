import { Review } from "contentlayer/generated";
import { H6 } from "../typo/heading";
import { Paragraph, XSParagraph } from "../typo/paragraphs";
import { format, parseISO } from "date-fns";

export const ReviewCard = (review: Review) => {
  return (
    <div
      className="break-words h-auto max-w-full p-4 bg-white border border-gray-200 
                        rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700
                        hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
    >
      <H6>{review.title}</H6>
      <XSParagraph>{`${format(parseISO(review.publishedAt), "LLLL d, yyyy")}${
        Math.ceil(review.readingTime["minutes"]) >= 1
          ? ` · ${review.readingTime["text"]}`
          : ""
      }`}</XSParagraph>
      <div className="mb-1" />
      <Paragraph>{review.description}</Paragraph>
    </div>
  );
};
