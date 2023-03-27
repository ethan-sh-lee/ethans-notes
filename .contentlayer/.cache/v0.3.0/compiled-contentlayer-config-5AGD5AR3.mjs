// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `posts/**/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    }
  }
}));
var DailyLog = defineDocumentType(() => ({
  name: "DailyLog",
  contentType: "mdx",
  filePathPattern: `dailylogs/**/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the problem",
      required: true
    },
    link: {
      type: "string",
      description: "The link of the problem",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the daily log",
      required: true
    },
    isOk: {
      type: "boolean",
      description: "failure or success"
    },
    platform: {
      type: "enum",
      options: ["\uD504\uB85C\uADF8\uB798\uBA38\uC2A4", "\uBC31\uC900"]
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (log) => `/${log._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "contents",
  documentTypes: [Post, DailyLog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism]
  }
});
export {
  DailyLog,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-5AGD5AR3.mjs.map
