import { noteCategories } from "@/const/menu";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHeading } from "../components/typo/PageHeading";
import { CategoryCard } from "../components/card/CategoryCard";

export default async function Programming() {
  return (
    <PageLayout>
      <PageHeading head="학습 노트" summary="학습 노트는 배우고 익히고 싶은 모든 것을 정리하고 있습니다." />
      <div className="mt-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {noteCategories.map((category, index) => (
          <CategoryCard key={index} cate={category} />
        ))}
      </div>
    </PageLayout>
  );
}
