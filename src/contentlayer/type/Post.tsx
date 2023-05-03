import { defineDocumentType } from "contentlayer/source-files";
import readingTime, { ReadTimeResults } from "reading-time";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `posts/**/*.mdx`,
  fields: {
    id: {
      type: "number",
      description: "정렬할 때 사용할 수도 있음",
      required: false,
    },
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "포스트 설명",
    },
    publishedAt: {
      type: "date",
      description: "발행일",
      required: true,
    },
    isPublished: {
      type: "boolean",
      description: "발행 여부",
      default: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    path: {
      type: "string",
      resolve: (post) => post._raw.sourceFileDir.replaceAll("posts", ""),
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    readingTime: {
      type: "json",
      resolve: (doc): ReadTimeResults => readingTime(doc.body.raw),
    },
  },
}));
