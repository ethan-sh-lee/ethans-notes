import { compareDesc } from "date-fns";
import { DailyLog, allDailyLogs } from "contentlayer/generated";
import DailyLogCard from "../components/card/DailyLogCard";
import { PageHeading } from "../components/typo/PageHeading";
import { PageLayout } from "../components/layout/PageLayout";

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
    <PageLayout>
      <PageHeading head="데일리로그" summary="더 나은 문제해결 능력을 위해 알고리즘 문제를 풀고 있습니다." />
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-2xl my-4 p-2 md:p-4">
        <div className="relative px-2 md:px-4">
          <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
          {logs.map((log, idx) => (
            <DailyLogCard key={idx} {...log} />
          ))}
        </div>
      </div>
    </PageLayout >

  );
}
