import { Post } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import Comments from "@/app/components/Comments";
import "@/styles/prism-darcula.css";
import "@/styles/prism.css";

// Post 타입 컨텐츠
export const SimpleLayout = ({ post }: { post: Post }) => {
    const MDXContent = useMDXComponent(post?.body?.code);
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
    )
}