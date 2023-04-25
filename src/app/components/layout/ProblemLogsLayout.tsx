import { Log } from "contentlayer/generated";
import "@/styles/prism-darcula.css";
import "@/styles/prism.css";
import DailyLogCard from "../card/DailyLogCard";
import Link from "next/link";

export const ProblemLogsLayout = ({
    logs,
    title,
    link,
}: {
    logs: Log[];
    title: string;
    link: string;
}) => {
    return (
        <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-extrabold dark:text-white">{title}</h2>
            <Link
                rel="noopener noreferrer"
                target="_blank"
                href={link}
                className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-600 rounded-lg bg-gray-200 hover:text-gray-900 hover:bg-gray-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                <span className="w-full">문제 보러가기</span>
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
            <div className="flex-1 bg-neutral-50 dark:bg-gray-800 rounded-lg my-2 shadow-xl p-2 md:p-4">
                <div className="relative px-2 md:px-4">
                    <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
                    {logs.map((log, idx) => (
                        <DailyLogCard key={idx} {...log} />
                    ))}
                </div>
            </div>
        </div>
    );
};
