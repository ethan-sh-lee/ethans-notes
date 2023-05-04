import { noteCategories } from "@/const/menu";

export async function generateStaticParams() {
  return noteCategories.map((category) => ({
    category: category.category,
  }));
}

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
