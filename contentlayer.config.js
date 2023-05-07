import { makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";
import rehypeMermaid from "rehype-mermaidjs";
import * as documentTypes from "./src/contentlayer";

export default makeSource({
  contentDirPath: "contents",
  documentTypes,
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeAutolinkHeadings,
      rehypeMermaid,
    ],
    remarkPlugins: [remarkGfm],
  },
});
