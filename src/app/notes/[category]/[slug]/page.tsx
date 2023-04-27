import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { SimplePostLayout } from "@/app/components/layout/SimplePostLayout";
import { noteCategories } from "@/const/menu";

type PageProps = {
    params: {
        category: string;
        slug: string;
    };
};

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    const slugs = allPosts
        .filter(({ path }) => {
            return noteCategories.find(({ href }) => {
                href == path;
            });
        })
        .map(({ path, slug }) => {
            return {
                category: path,
                slug: slug,
            };
        });
    return slugs;
}

const PostLayout = ({ params }: PageProps) => {
    const post = allPosts.find(({ url }) => {
        return (
            url.replaceAll(`/posts/notes/${params.category}/`, "") === params.slug
        );
    });

    if (!post) {
        notFound();
    }

    return <SimplePostLayout post={post} />;
};

export default PostLayout;
