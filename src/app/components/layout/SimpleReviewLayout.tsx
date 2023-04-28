"use client";

import { Review } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { Comments } from "@/app/components/Comments";
import "@/styles/prism-darcula.css";
import "@/styles/prism.css";
import { MediaComponent } from "@/app/components/MediaComponent";
import { H2 } from "../typo/heading";

export const SimpleReviewLayout = ({ review }: { review: Review }) => {
  const MDXContent = useMDXComponent(review?.body?.code);

  return (
    <div className="px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 prose">
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
