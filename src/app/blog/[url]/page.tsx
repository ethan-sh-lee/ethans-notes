import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import "@/styles/prism-darcula.css";
import "@/styles/prism.css";
import Comments from "@/app/components/Comments";

//posts/ 경로에서 mdx 파일을 가져온다
//현재 경로와 맞는 컨텐츠를 MDXComponenet로 뿌려주며 remark, rehype 플러그인이 적용된다
//remark-gfm을 통해 github식 markdown을 표현해준다.

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

    const MDXContent = useMDXComponent(post?.body?.code);
    //container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8
    return (
        <div className="px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 prose">
            <title>{post.title}</title>
            <article>
                <div>
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                    <time dateTime={post.date}>
                        {format(parseISO(post.date), "LLLL d, yyyy")}
                    </time>
                </div>

                <MDXContent />
                <div className="pt-8" />
                <Comments />
            </article>
        </div>
    );
};

export default PostLayout;
