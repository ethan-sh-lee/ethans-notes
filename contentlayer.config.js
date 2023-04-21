import { makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { Post } from "./src/type/Post";
import { Problem } from "./src/type/Problem";
import { Review } from "./src/type/Review";

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Post, Problem, Review],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrism],
  },
});
