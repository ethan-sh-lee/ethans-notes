"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export const Comments = () => {
  const { theme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo={"sunho-lee/ethans-notes"}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID!}
      category="Announcements"
      categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme == "light" ? "light" : "dark"}
      lang="ko"
      loading="lazy"
    />
  );
};
