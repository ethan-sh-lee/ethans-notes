import { TypographyH4, TypographyMuted } from "@/components/typograhpy";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Tag } from "@/components/tag";

type PostCardProps = {
  slug: string;
  title: string;
  description?: string;
  publishedAt: Date;
  tags?: Array<string>;
};

export default function PostCard({
  slug,
  title,
  description,
  publishedAt,
  tags,
}: PostCardProps) {
  const blogLink = "/" + slug;

  return (
    <div
      className="w-full py-4 dark:px-4 rounded bg-white dark:bg-gray-900 dark:border-gray-700
      dark:hover:bg-gray-800"
    >
      <TypographyH4>
        <Link href={blogLink}>{title}</Link>
      </TypographyH4>
      <div className="pt-2" />
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <Tag name={tag} key={tag} />
        ))}
      </div>
      <div className="pt-2" />
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
          <time dateTime={publishedAt.toUTCString()}>
            {formatDate(publishedAt.toUTCString())}
          </time>
        </div>
        <Link href={blogLink} className="text-sm">
          보러가기 →
        </Link>
      </div>
    </div>
  );
}
