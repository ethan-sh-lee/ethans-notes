import {
  defineDocumentType,
  defineNestedType,
} from "contentlayer/source-files";
import readingTime from "reading-time";

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
    views: {
      type: "number",
      description: "내가 본 횟수",
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
      type: "nested",
      of: [Youtube, Book, Article],
      description: "리뷰 대상의 이미지, 영상, 링크 등",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (review) => `/${review._raw.flattenedPath}`,
    },
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  },
}));

const Book = defineNestedType(() => ({
  name: "Book",
  fields: {
    link: {
      type: "string",
      description: "책 링크",
      required: true,
    },
    image: {
      type: "string",
      required: true,
      description: "책 이미지 링크",
    },
  },
}));

const Youtube = defineNestedType(() => ({
  name: "Youtube",
  fields: {
    id: {
      type: "string",
      required: true,
      description: "유튜브 동영상 아이디",
    },
  },
}));

const Article = defineNestedType(() => ({
  name: "Article",
  fields: {
    link: {
      type: "string",
      description: "외부 게시물 링크",
      required: true,
    },
  },
}));
