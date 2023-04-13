import { PageLayout } from "../components/layout/PageLayout";
import { PageHeading } from "../components/typo/PageHeading";

export default async function Programming() {
  return (
    <PageLayout>
      <PageHeading head="학습 노트" summary="학습 노트는 배우고 익히고 싶은 모든 것을 정리하고 있습니다." />
    </PageLayout>
  );
}
