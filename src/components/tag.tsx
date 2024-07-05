"use client";

export const Tag = ({
  name,
  count,
  handler = () => {},
  clickable = false,
}: {
  name: string;
  count?: number;
  handler?: Function;
  clickable?: boolean;
}) => {
  return (
    <span
      onClick={(e) => handler(name)}
      className={`${
        clickable
          ? "cursor-pointer text-xs uppercase font-semibold bg-gray-100 text-gray-600 dark:text-gray-100 dark:bg-gray-500  inline-block px-3 py-1 rounded-full"
          : "text-xs uppercase font-semibold bg-gray-100 text-gray-600 dark:text-gray-100 dark:bg-gray-500  inline-block px-3 py-1 rounded-full"
      }`}
    >
      {name} {count ? `(${count})` : null}
    </span>
  );
};
