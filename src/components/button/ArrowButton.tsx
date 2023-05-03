import Link from "next/link";

export const ArrowButton = ({
  link,
  title,
}: {
  link: string;
  title: string;
}) => {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      href={link}
      className="inline-flex items-center justify-center no-underline p-5 text-base font-medium text-gray-600 rounded-lg bg-gray-200 hover:text-gray-900 hover:bg-gray-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <span className="w-full">{title}</span>
      <svg
        aria-hidden="true"
        className="w-6 h-6 ml-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Link>
  );
};
