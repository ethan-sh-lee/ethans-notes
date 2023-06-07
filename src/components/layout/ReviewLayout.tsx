"use client";

import { Review } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { Comments } from "@/components/Comments";
import { MediaComponent } from "@/components/MediaComponent";
import { H2 } from "@/components/typo/heading";

export const ReviewLayout = ({ review }: { review: Review }) => {
  const MDXContent = useMDXComponent(review?.body?.code);

  return (
    <div className="px-2 mx-auto xl:px-5 max-w-screen-lg py-2 lg:py-4 prose-sm md:prose dark:prose-invert">
      <title>{review.title}</title>
      <article>
        <div>
          <H2>{review.title}</H2>
          <time dateTime={review.publishedAt}>
            {format(parseISO(review.publishedAt), "LLLL d, yyyy")}
          </time>
        </div>
        <div className="mt-8" />
        <MediaComponent media={review.media} />
        <MDXContent />
        <div className="mt-8" />
        <Comments />
      </article>
    </div>
  );
};
