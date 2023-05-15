import { notFound } from "next/navigation";
import { allProblems } from "contentlayer/generated";
import { ProblemLogsLayout } from "@/components/layout/ProblemLogsLayout";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allProblems.map(({ slug }) => ({
    slug: slug,
  }));
}

const ReviewLayout = ({ params }: PageProps) => {
  const problem = allProblems.find(({ slug }) => {
    return slug === params.slug;
  });

  if (!problem) {
    notFound();
  }

  if (problem.logs == undefined) {
    problem.logs = [];
  }

  return (
    <ProblemLogsLayout
      logs={problem.logs!}
      title={problem.title}
      link={problem.link}
    />
  );
};

export default ReviewLayout;
