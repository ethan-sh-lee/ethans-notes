import { notFound } from "next/navigation";
import { allProblems } from "contentlayer/generated";
import { ProblemLogsLayout } from "@/app/components/layout/ProblemLogsLayout";

type PageProps = {
    params: {
        url: string;
    };
};

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return allProblems.map(({ url }) => ({
        url: url
    }));
}

const ReviewLayout = ({ params }: PageProps) => {
    const problem = allProblems.find(
        ({ url }) => {
            return url.replaceAll("/problems/", "") == params.url
        }
    );

    if (!problem) {
        notFound();
    }

    if (problem.logs == undefined) {
        problem.logs = []
    }

    return <ProblemLogsLayout logs={problem.logs!} title={problem.title} link={problem.link} />;
};

export default ReviewLayout;
