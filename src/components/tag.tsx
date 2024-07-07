"use client";

import Link from "next/link";

export default function Tag({
  name,
  count,
  isCurrent,
}: {
  name: string;
  count?: number;
  isCurrent?: boolean;
}) {
  return (
    <Link
      href={`/tags/${name}`}
      className={isCurrent ? "pointer-events-none" : ""}
      aria-disabled={isCurrent}
      tabIndex={isCurrent ? -1 : undefined}
    >
      <span
        className={`${
          isCurrent
            ? "bg-gray-600 text-gray-100 dark:bg-gray-200 dark:text-gray-600"
            : "bg-gray-100 text-gray-600 dark:bg-gray-500 dark:text-gray-100"
        } text-xs uppercase font-semibold inline-block px-3 py-1 rounded-full`}
      >
        {name} {count ? `(${count})` : null}
      </span>
    </Link>
  );
}
