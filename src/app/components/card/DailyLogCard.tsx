import { DailyLog } from ".contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import TagPlatform from "../tag/TagPlatform";
import TagLevel from "../tag/TagLevel";
import TagLang from "../tag/TagLang";

export default function DailyLogCard(log: DailyLog) {
  return (
    <div className="flex items-center w-full my-6 -ml-1.5">
      <div className="w-1/12 z-10">
        <div
          className={
            log.isOk
              ? "w-3.5 h-3.5 bg-blue-600 rounded-full"
              : "w-3.5 h-3.5 bg-red-600 rounded-full"
          }
        ></div>
      </div>
      <div className="w-11/12">
        <p className="text-xs text-gray-500 pl-1">
          {format(parseISO(log.date), "LLLL d, yyyy")}
        </p>
        <div className="flex items-baseline flex-row flex-wrap">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="pl-1 text-sm font-bold"
            href={log.link}
          >
            {log.title}
          </Link>

          <p className="text-sm pl-1">{"문제를 해결하는데"}</p>
          {log.isOk ? (
            <p className="text-sm font-bold pl-1 text-blue-600">{"성공"}</p>
          ) : (
            <p className="text-sm font-bold pl-1 text-red-600">{"실패"}</p>
          )}

          <p className="text-sm">{"하였습니다."}</p>
        </div>
        {(
          <p className="text-xs pl-1 text-gray-500 dark:pb-1">
            {log.description}
          </p>
        ) ?? null}
        <div className="flex items-center gap-1">
          <TagPlatform value={log.platform} />
          <TagLevel value={log.level} />
          <TagLang value={log.lang} />
        </div>
      </div>
    </div>
  );
}
