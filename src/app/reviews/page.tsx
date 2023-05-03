import { compareDesc } from "date-fns";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeading } from "@/components/typo/PageHeading";
import { allReviews } from "contentlayer/generated";
import { ReviewCard } from "@/components/card/ReviewCard";
import { MasonryLayout } from "../../components/layout/masonry/MasonryLayout";
import Link from "next/link";

function getData() {
  const reviews = allReviews
    .filter((review) => {
      return review._raw.sourceFileDir == "reviews";
    })
    .filter((review) => {
      return review.isPublished;
    })
    .sort((a, b) => {
      return compareDesc(new Date(b.publishedAt), new Date(a.publishedAt));
    });
  return reviews;
}

export default function Reviews() {
  const reviews = getData();
  return (
    <PageLayout>
      <PageHeading
        head="리뷰"
        summary="책, 영화, 동영상 등 영감을 준 모든 컨텐츠에 감상문을 작성하고 있습니다."
      />
      <div className="mt-4" />
      <MasonryLayout size={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
        {reviews.map((review, index) => (
          <Link key={index} href={review.url}>
            <ReviewCard {...review} />
          </Link>
        ))}
      </MasonryLayout>
    </PageLayout>
  );
}
