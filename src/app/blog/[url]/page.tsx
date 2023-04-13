import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { SimpleLayout } from "@/app/components/layout/SimplePostLayout";

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
            return url.replaceAll("/posts/blog/", "") == params.url
        }
    );

    if (!post) {
        notFound();
    }


    return <SimpleLayout post={post} />;
};

export default PostLayout;
