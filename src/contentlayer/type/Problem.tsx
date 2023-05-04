import {
  defineDocumentType,
  defineNestedType,
} from "contentlayer/source-files";

export const Problem = defineDocumentType(() => ({
  name: "Problem",
  filePathPattern: `problems/**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the problem",
      required: true,
    },
    link: {
      type: "string",
      description: "The link of the problem",
      required: true,
    },
    publishedAt: {
      type: "date",
      description: "문제 등록 날짜",
      required: true,
    },
    isPublished: {
      type: "boolean",
      description: "발행여부",
      required: true,
      default: false,
    },
    platform: {
      type: "nested",
      of: [Programmers, BOJ, CodeWars, LeetCode],
      required: true,
    },
    logs: {
      type: "list",
      of: Log,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (logs) => `/${logs._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(".md", ""),
    },
  },
}));

const Log = defineNestedType(() => ({
  name: "Log",
  fields: {
    date: {
      type: "date",
      description: "문제 푼 날짜",
      required: true,
    },
    isOk: {
      type: "boolean",
      description: "failure or success",
      required: true,
    },
    description: {
      type: "string",
      description: "틀린 문제 이유",
      required: false,
    },
    lang: {
      required: true,
      type: "enum",
      options: [
        "java",
        "cpp",
        "rust",
        "javascript",
        "haskell",
        "python",
        "kotlin",
        "elixir",
        "sql",
      ],
    },
  },
}));

const Programmers = defineNestedType(() => ({
  name: "Programmers",
  fields: {
    level: {
      type: "enum",
      required: true,
      options: ["Lv.0", "Lv.1", "Lv.2", "Lv.3", "Lv.4", "Lv.5"],
    },
  },
}));

const BOJ = defineNestedType(() => ({
  name: "BOJ",
  fields: {
    level: {
      type: "enum",
      required: true,
      options: [
        "Unrated",
        "Bronze5",
        "Bronze4",
        "Bronze3",
        "Bronze2",
        "Bronze1",
        "Silver5",
        "Silver4",
        "Silver3",
        "Silver2",
        "Silver1",
        "Gold5",
        "Gold4",
        "Gold3",
        "Gold2",
        "Gold1",
        "Platinum5",
        "Platinum4",
        "Platinum3",
        "Platinum2",
        "Platinum1",
        "Diamond5",
        "Diamond4",
        "Diamond3",
        "Diamond2",
        "Diamond1",
        "Ruby5",
        "Ruby4",
        "Ruby3",
        "Ruby2",
        "Ruby1",
      ],
    },
  },
}));

const CodeWars = defineNestedType(() => ({
  name: "CodeWars",
  fields: {
    level: {
      type: "enum",
      required: true,
      options: ["8kyu", "7kyu", "6kyu", "5kyu", "4kyu", "3kyu", "2kyu", "1kyu"],
    },
  },
}));

const LeetCode = defineNestedType(() => ({
  name: "LeetCode",
  fields: {
    level: {
      type: "enum",
      required: true,
      options: ["Easy", "Medium", "Hard"],
    },
  },
}));
