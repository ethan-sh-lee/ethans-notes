import { Review } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import Comments from "@/app/components/Comments";
import "@/styles/prism-darcula.css";
import "@/styles/prism.css";

// Post 타입 컨텐츠
export const SimpleReviewLayout = ({ review }: { review: Review }) => {
    const MDXContent = useMDXComponent(review?.body?.code);
    return (
        <div className="px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 prose">
            <title>{review.title}</title>
            <article>
                <div>
                    <h1 className="text-3xl font-bold">{review.title}</h1>
                    <time dateTime={review.publishedAt}>
                        {format(parseISO(review.publishedAt), "LLLL d, yyyy")}
                    </time>
                </div>

                <MDXContent />
                <div className="pt-8" />
                <Comments />
            </article>
        </div>
    )
}