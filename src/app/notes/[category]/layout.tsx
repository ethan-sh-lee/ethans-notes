import { noteCategories } from "@/const/menu";

export async function generateStaticParams() {
  return noteCategories.map((category) => ({
    category: category.category,
  }));
}

const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default CategoryLayout;
