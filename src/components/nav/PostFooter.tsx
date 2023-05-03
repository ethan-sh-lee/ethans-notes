import Link from "next/link";

export const PostFooter = ({
  prevPost,
  nextPost,
}: {
  prevPost: RelatedPost | null;
  nextPost: RelatedPost | null;
}) => {
  return (
    <footer>
      <div className="flex flex-col gap-4 pt-4 text-base font-medium sm:flex-row sm:justify-between xl:gap-8 xl:pt-8">
        {prevPost !== null ? (
          <div className="basis-6/12">
            <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400">
              이전 게시물
            </h2>
            <Link
              href={prevPost.href}
              className="text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            >
              &larr; {prevPost.title}
            </Link>
          </div>
        ) : (
          <div />
        )}
        {nextPost !== null && (
          <div className="basis-6/12">
            <h2 className="mb-1 text-left text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400 sm:text-right">
              다음 게시물
            </h2>
            <Link
              href={nextPost.href}
              className="block text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400 sm:text-right"
            >
              {nextPost.title} &rarr;
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
};
