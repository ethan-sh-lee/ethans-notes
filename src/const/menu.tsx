export const menus = [
  { title: "Blog", href: "/blog" },
  { title: "Notes", href: "/notes" },
  { title: "Problems", href: "/problems" },
  { title: "Reviews", href: "/reviews" },
];

export const noteCategories: Category[] = [
  {
    title: "문제풀이를 위한 스킬들",
    description: "알고리즘 문제 풀이를 위한 구현 스킬을 정리합니다.",
    href: "/notes/algorithm-skills",
    tags: ["cpp"],
  },
  {
    title: "Javascript 문법 및 활용",
    description:
      "웹 서비스에서 가장 광범위하게 사용되는 Javascript를 정리한다.",
    href: "/notes/javascript",
    tags: ["문법", "DOM조작"],
  },
  {
    title: "NextJs13로 정적 블로그 만들기",
    description:
      "NextJs13, Contentlayer, TailwindCSS, Typescript로 마크다운 기반 정적 블로그 만들기",
    href: "/notes/make-blog",
    tags: ["NextJs", "Contentlayer", "TailwindCSS", "Typescript", "Markdown"],
  },
  {
    title: "좋은 코드란 무엇인가",
    description: "유지보수하기 좋고 깨지지 않는 좋은 코드 작성을 위한 것들",
    href: "/notes/clean-code",
    tags: ["유지보수성", "버그방지", "가독성"],
  },
];
