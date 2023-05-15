import { Log } from "contentlayer/generated";
import DailyLogCard from "@/components/card/DailyLogCard";
import { ArrowButton } from "@/components/button/ArrowButton";
import { H2 } from "../typo/heading";

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
      <H2>{title}</H2>
      <div className="mb-4" />
      <ArrowButton link={link} title="문제 보러가기" />
      <div className="flex-1 bg-neutral-50 dark:bg-gray-800 rounded-lg my-2 shadow p-2 md:p-4">
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
