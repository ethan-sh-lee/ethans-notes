import { PageLayout } from "../components/layout/PageLayout";
import { PageHeading } from "../components/typo/PageHeading";

export default async function Reviews() {
  return (
    <PageLayout>
      <PageHeading head="리뷰" summary="책, 영화, 동영상 등 영감을 준 모든 컨텐츠에 감상문을 작성하고 있습니다." />
    </PageLayout>
  );

}
