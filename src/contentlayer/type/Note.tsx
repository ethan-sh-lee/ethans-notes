import { defineDocumentType } from "contentlayer/source-files";
import readingTime, { ReadTimeResults } from "reading-time";

export const Note = defineDocumentType(() => ({
  name: "Note",
  contentType: "mdx",
  filePathPattern: `notes/**/*.mdx`,
  fields: {
    id: {
      type: "number",
      description: "정렬할 때 사용",
      required: true,
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
      resolve: (note) => `/${note._raw.flattenedPath}`,
    },
    category: {
      type: "string",
      resolve: (note) => note._raw.sourceFileDir.replace("notes/", ""),
    },
    slug: {
      type: "string",
      resolve: (note) => note._raw.sourceFileName.replace(".mdx", ""),
    },
    readingTime: {
      type: "json",
      resolve: (doc): ReadTimeResults => readingTime(doc.body.raw),
    },
  },
}));
