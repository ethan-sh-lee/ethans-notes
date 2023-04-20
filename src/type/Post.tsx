import { defineDocumentType } from "contentlayer/source-files";

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
    desc: {
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
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}));
