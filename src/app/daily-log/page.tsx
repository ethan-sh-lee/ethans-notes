import { compareDesc } from "date-fns";
import { DailyLog, allDailyLogs } from "contentlayer/generated";
import DailyLogCard from "../components/DailyLogCard";

//메인 화면
//포스트 카드와 포스트 리스트로 블로그 글을 탐색할 수 있도록 함

async function getData() {
  const dailyLogs: DailyLog[] = allDailyLogs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return dailyLogs;
}

export default async function Home() {
  const logs = await getData();
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex-1 bg-stone-50 dark:bg-gray-900 rounded-lg shadow-xl my-4 p-2 md:p-4">
        <h4 className="text-xl text-gray-900 dark:text-white font-bold">
          Daily logs
        </h4>
        <h6>매일매일 알고리즘 문제를 풀고 있습니다.</h6>
        <h6>더 나은 문제해결 능력을 위해 꾸준히 진행 중입니다.</h6>
        <div className="relative px-2 md:px-4">
          <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
          {logs.map((log, idx) => (
            <DailyLogCard key={idx} {...log} />
          ))}
        </div>
      </div>
    </div>
  );
}
