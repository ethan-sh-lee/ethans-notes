import { MainPageLayout } from "@/app/components/layout/MainPageLayout";
import { H1 } from "@/app/components/typo/heading";

export default async function Home() {
  return (
    <MainPageLayout>
      <title>Ethan&#39;s Notes</title>
      <div className="grid place-items-center">
        <H1>Hi, I`m Ethan Lee.</H1>
        <p className="max-w-lg pt-3 text-xl md:text-2xl  font-light text-black dark:text-white ">
          안녕하세요, 개발자 Ethan Lee입니다. 학습한 것을 내 것으로 만들고 지속적으로 발전시키기 위해 블로그를 운영하고 있습니다.
        </p>
      </div>
    </MainPageLayout>
  );
}
