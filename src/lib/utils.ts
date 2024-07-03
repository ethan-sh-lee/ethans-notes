import { Post } from "#site/content";

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.publishedAt > b.publishedAt) return -1;
    else if (a.publishedAt < b.publishedAt) return 1;
    return 0;
  });
}
