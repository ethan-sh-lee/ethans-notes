import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { SimpleLayout } from "@/app/components/layout/SimpleLayout";

type PageProps = {
    params: {
        url: string;
    };
};

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return allPosts.map(({ url }) => ({
        url: url
    }));
}

const PostLayout = ({ params }: PageProps) => {
    const post = allPosts.find(
        ({ url }) => {
            return url.replaceAll("/posts/misc/", "") == params.url
        }
    );

    if (!post) {
        notFound();
    }
    return <SimpleLayout post={post} />;
};

export default PostLayout;
