import { Problem } from ".contentlayer/generated";
import Link from "next/link";
import { Paragraph, SmallParagraph } from "../typo/paragraphs";
import { iconRenderer } from "../icon/IconRenderer";

export default function DailyLogCard(problem: Problem) {
  const langs = problem.logs
    ?.map((log) => {
      return log.lang;
    })
    .filter((value, index, array) => {
      return array.indexOf(value) === index;
    });

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div>
        <SmallParagraph>
          {problem.platform.type + " " + problem.platform.level}
        </SmallParagraph>
        <div className="mb-1" />
        <Link
          rel="noopener noreferrer"
          target="_blank"
          className="text-2xl font-bold dark:text-white hover:text-gray-700 dark:hover:text-gray-200 hover:underline"
          href={problem.link}
        >
          {problem.title}
        </Link>
        <div className="mb-0 sm:mb-5" />
        <Paragraph>{"풀어본 횟수 : " + problem.logs?.length.toString() + "회"}</Paragraph>
      </div>
      <div className="mb-5 sm:mb-0" />
      <div className="flex gap-1">
        {langs!.map((lang, index) => { return iconRenderer(lang, index) })}
      </div>
    </div>
  );
}
