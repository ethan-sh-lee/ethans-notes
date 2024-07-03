import { TypographyH1 } from "@/components/typograhpy";

const Home = () => {
  return (
    <div className="pt-4 mx-auto max-w-4xl">
      <title>Ethan&#39;s Notes</title>
      <div className="grid place-items-center">
        <TypographyH1>Hi, I`m Ethan Lee.</TypographyH1>
        <p className="max-w-lg pt-3 text-xl md:text-2xl  font-light text-black dark:text-white ">
          안녕하세요, 개발자 Ethan Lee입니다. 학습한 것을 내 것으로 만들고
          지속적으로 발전시키기 위해 블로그를 운영하고 있습니다.
        </p>
      </div>
    </div>
  );
};
export default Home;
