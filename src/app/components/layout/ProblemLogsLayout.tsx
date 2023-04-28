import { Log } from "contentlayer/generated";
import "@/styles/prism-darcula.css";
import "@/styles/prism.css";
import DailyLogCard from "@/app/components/card/DailyLogCard";
import { ArrowButton } from "@/app/components/button/ArrowButton";

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
      <ArrowButton link={link} title="문제 보러가기" />
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
