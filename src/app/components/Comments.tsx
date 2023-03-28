"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo={`${process.env.NEXT_PUBLIC_GISCUS_REPO_USERNAME} + "/" + ${process.env.NEXT_PUBLIC_GISCUS_REPO_NAME}`}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID ?? ""}
      category="Announcements"
      categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="ko"
      loading="lazy"
    />
  );
}
