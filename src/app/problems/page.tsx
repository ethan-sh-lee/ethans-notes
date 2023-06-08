import { PageHeading } from "@/components/typo/PageHeading";
import PageLayout from "@/components/layout/PageLayout";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { compareDesc } from "date-fns";
import { Problem, allProblems } from "contentlayer/generated";

//메인 화면
//포스트 카드와 포스트 리스트로 블로그 글을 탐색할 수 있도록 함

const ProblemsTable = dynamic(() => import("@/components/ProblemsTable"), {
  ssr: false,
});

const ProblemsPage = () => {
  return (
    <PageLayout>
      <PageHeading
        head="Problems"
        summary="더 나은 문제해결 능력을 위해 알고리즘 문제를 풀고 있습니다."
      />
      <div className="mt-2" />
      <Suspense fallback={<p>로딩</p>}>
        <ProblemsTable problemsProp={getData()} />
      </Suspense>
    </PageLayout>
  );
};

export default ProblemsPage;

function getData(): Problem[] {
  const problems: Problem[] = allProblems
    .filter((p) => {
      return p.isPublished;
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
  return problems;
}
