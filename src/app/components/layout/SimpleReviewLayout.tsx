"use client";

import { Book, Review, Youtube } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import Comments from "@/app/components/Comments";
import "@/styles/prism-darcula.css";
import "@/styles/prism.css";
import YouTube from "react-youtube";
import Image from "next/image";
import Link from "next/link";

// Post 타입 컨텐츠
export const SimpleReviewLayout = ({ review }: { review: Review }) => {
    const MDXContent = useMDXComponent(review?.body?.code);

    function getMedia(media: Youtube | Book) {
        if (media.type == "Youtube") {
            return (
                <YouTube
                    videoId={media.id}
                    opts={{
                        width: 0,
                        height: 0,
                        playerVars: {
                            autoplay: 1,
                        },
                    }}
                    onReady={(event) => { event.target.playVideo(); }}
                    iframeClassName="w-full aspect-auto sm:aspect-video"
                />
            );
        } else if (media.type == "Book") {
            return (
                <div className="grid place-items-center">
                    <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        href={media.link}>
                        <Image className="m-0" height={700} width={350} src={media.image} alt="책 이미지" />
                    </Link>
                </div>
            )
        } else {
            return null;
        }
    }

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
                <div className="mt-8" />
                {getMedia(review.media)}
                <MDXContent />
                <div className="mt-8" />
                <Comments />
            </article>
        </div>
    );
};
