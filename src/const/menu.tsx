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
    href: "/notes/skills",
    tags: ["cpp"],
  },
  {
    title: "코틀린과 스프링부트로 백엔드 개발하기",
    description: "코틀린, 스프링부트, 웹플럭스로 백엔드 구현하기",
    href: "/notes/spring-kotlin",
    tags: [
      "Kotlin",
      "Spring",
      "MSA",
      "Reactive",
      "Mysql",
      "MongoDB",
      "Kafka",
      "Redis",
      "Monitoring",
      "Tracing",
    ],
  },
  {
    title: "언어 문법 빠르게 정리하기",
    description: "언어 문법 위주로 간단하게 정리",
    href: "/notes/syntax",
    tags: ["제어문", "반복문", "객체지향", "I/O"],
  },
  {
    title: "좋은 코드란 무엇인가",
    description: "유지보수하기 좋고 깨지지 않는 좋은 코드 작성을 위한 것들",
    href: "/notes/clean-code",
    tags: ["리팩토링", "클린코드", "객체지향", "함수형"],
  },
];
