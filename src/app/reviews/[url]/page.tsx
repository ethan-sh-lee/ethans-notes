import { notFound } from "next/navigation";
import { allReviews } from "contentlayer/generated";
import { ReviewLayout } from "@/components/layout/ReviewLayout";

type PageProps = {
  params: {
    url: string;
  };
};

export function generateStaticParams(): PageProps["params"][] {
  return allReviews.map(({ url }) => ({
    url: url,
  }));
}

const ReviewPage = ({ params }: PageProps) => {
  const review = allReviews.find(({ url }) => {
    return url.replaceAll("/reviews/", "") == params.url;
  });

  if (!review) {
    notFound();
  }

  return <ReviewLayout review={review} />;
};

export default ReviewPage;
