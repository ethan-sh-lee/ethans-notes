"use client";

export const Tag = ({
  name,
  handler = () => {},
  clickable = false,
}: {
  name: string;
  handler?: Function;
  clickable?: boolean;
}) => {
  return (
    <span
      onClick={(e) => handler(name)}
      className={`${
        clickable
          ? "cursor-pointer text-xs uppercase font-bold tracking-wider bg-gray-300 text-gray-600 dark:text-gray-300 dark:bg-gray-600  inline-block px-2 py-1 rounded"
          : "text-xs uppercase font-bold tracking-wider bg-gray-300 text-gray-600 dark:text-gray-300 dark:bg-gray-600  inline-block px-2 py-1 rounded"
      }`}
    >
      {name}
    </span>
  );
};
