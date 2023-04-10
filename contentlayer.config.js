import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `posts/**/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

//title, link, platform, level, date, isOk lang
export const DailyLog = defineDocumentType(() => ({
  name: "DailyLog",
  contentType: "md",
  filePathPattern: `dailylogs/**/*.md`,
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
    description: {
      type: "string",
      description: "",
      required: false,
    },
    platform: {
      type: "enum",
      options: ["프로그래머스", "백준", "codewars", "leetcode", "reetcode"],
    },
    level: {
      type: "enum",
      options: [
        "Lv. 0",
        "Lv. 1",
        "Lv. 2",
        "Lv. 3",
        "Lv. 4",
        "Lv. 5",
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
        "8kyu",
        "7kyu",
        "6kyu",
        "5kyu",
        "4kyu",
        "3kyu",
        "2kyu",
        "1kyu",
        "Easy",
        "Medium",
        "Hard",
      ],
    },
    date: {
      type: "date",
      description: "The date of the daily log",
      required: true,
    },
    isOk: {
      type: "boolean",
      description: "failure or success",
      required: true,
    },
    lang: {
      type: "enum",
      options: [
        "java",
        "cpp",
        "rust",
        "go",
        "javascript",
        "typescript",
        "haskell",
        "c",
        "python",
        "kotlin",
        "sql",
      ],
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (log) => `/${log._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Post, DailyLog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrism],
  },
});
