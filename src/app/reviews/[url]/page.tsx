import { notFound } from "next/navigation";
import { allReviews } from "contentlayer/generated";
import { SimpleReviewLayout } from "@/components/layout/SimpleReviewLayout";

type PageProps = {
  params: {
    url: string;
  };
};

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allReviews.map(({ url }) => ({
    url: url,
  }));
}

const ReviewLayout = ({ params }: PageProps) => {
  const review = allReviews.find(({ url }) => {
    return url.replaceAll("/reviews/", "") == params.url;
  });

  if (!review) {
    notFound();
  }

  return <SimpleReviewLayout review={review} />;
};

export default ReviewLayout;
