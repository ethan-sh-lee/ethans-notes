export const menus: Menu[] = [
  { title: "Blog", href: "/blog" },
  { title: "Notes", href: "/notes" },
  { title: "Problems", href: "/problems" },
  { title: "Reviews", href: "/reviews" },
];

export const noteCategories: Category[] = [
  {
    title: "문제풀이를 위한 스킬들",
    description: "알고리즘 문제 풀이를 위한 구현 스킬을 정리합니다.",
    category: "algo",
    tags: ["backtracking"],
  },
  {
    title: "NextJs13 정리 노트",
    description:
      "NextJs 13 버전과 새롭게 추가된 App 디렉토리, React 18 버전에 대해 정리한 노트",
    category: "nextjs",
    tags: ["NextJs13", "React18", "App-Directory"],
  },
];
