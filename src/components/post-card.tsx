import { TypographyH4, TypographyMuted } from "@/components/typograhpy";
import { Post } from "#site/content";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function PostCard({
  slug,
  title,
  description,
  publishedAt,
}: Post) {
  const blogLink = "/" + slug;

  return (
    <div
      className="w-full py-4 dark:px-4 rounded bg-white dark:bg-gray-800 dark:border-gray-700
      dark:hover:bg-gray-700"
    >
      <TypographyH4>
        <Link href={blogLink}>{title}</Link>
      </TypographyH4>
      {/*
      <XSParagraph>{`${format(parseISO(post.publishedAt), "LLLL d, yyyy")}${
        Math.ceil(post.readingTime["minutes"]) >= 1
          ? ` · ${post.readingTime["text"]}`
          : ""
      }`}</XSParagraph>
      */}
      <TypographyMuted>{description ? description : ""}</TypographyMuted>
      <div className="pt-2 flex justify-between items-center">
        <div className="text-sm sm:text-base font-medium flex items-center gap-1">
          <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
        </div>
        <Link href={blogLink} className="text-sm">
          보러가기 →
        </Link>
      </div>
    </div>
  );
}
