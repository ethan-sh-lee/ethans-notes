"use client";

import { noteCategories } from "@/const/menu";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeading } from "@/components/typo/PageHeading";
import { CategoryCard } from "@/components/card/CategoryCard";
import { MasonryLayout } from "@/components/layout/masonry/MasonryLayout";
import Link from "next/link";

export default function Notes() {
  return (
    <PageLayout>
      <PageHeading
        head="학습 노트"
        summary="학습 노트는 배우고 익히고 싶은 모든 것을 정리하고 있습니다."
      />
      <div className="mt-4" />
      <MasonryLayout size={{ xs: 1, sm: 2, md: 2, lg: 2 }}>
        {noteCategories.map((category, index) => (
          <Link href={`/notes/${category.category}`} key={index}>
            <CategoryCard {...category} />
          </Link>
        ))}
      </MasonryLayout>
    </PageLayout>
  );
}
