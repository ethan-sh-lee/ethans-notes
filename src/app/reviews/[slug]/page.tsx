import { notFound } from "next/navigation";
import { allReviews } from "contentlayer/generated";
import ReviewLayout from "@/components/layout/ReviewLayout";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams(): PageProps["params"][] {
  return allReviews.map(({ slug }) => ({
    slug: slug,
  }));
}

const ReviewPage = ({ params }: PageProps) => {
  const review = allReviews.find(({ slug }) => {
    return slug == params.slug;
  });

  if (!review) {
    notFound();
  }

  return <ReviewLayout review={review} />;
};

export default ReviewPage;
