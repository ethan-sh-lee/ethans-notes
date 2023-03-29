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

export const DailyLog = defineDocumentType(() => ({
  name: "DailyLog",
  contentType: "mdx",
  filePathPattern: `dailylogs/**/*.mdx`,
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
    date: {
      type: "date",
      description: "The date of the daily log",
      required: true,
    },
    isOk: {
      type: "boolean",
      description: "failure or success",
    },
    platform: {
      type: "enum",
      options: ["프로그래머스", "백준"],
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
