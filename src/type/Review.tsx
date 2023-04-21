import { defineDocumentType } from "contentlayer/source-files";

export const Review = defineDocumentType(() => ({
  name: "Review",
  contentType: "mdx",
  filePathPattern: `reviews/**/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "리뷰 대상 제목",
      required: true,
    },
    description: {
      type: "string",
      description: "리뷰 미리보기",
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
    media: {
      type: "string",
      description: "리뷰 대상의 이미지, 영상, 링크 등",
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
