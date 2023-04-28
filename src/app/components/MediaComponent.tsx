import { Article, Book, Youtube } from "contentlayer/generated";
import YouTube from "react-youtube";
import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "@/app/components/button/ArrowButton";

export const MediaComponent = ({
  media,
}: {
  media: Youtube | Book | Article;
}) => {
  const getMedia = () => {
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
          onReady={(event) => {
            event.target.playVideo();
          }}
          iframeClassName="w-full aspect-auto sm:aspect-video"
        />
      );
    } else if (media.type == "Book") {
      return (
        <div className="grid place-items-center">
          <Link rel="noopener noreferrer" target="_blank" href={media.link}>
            <Image
              className="m-0"
              height={700}
              width={350}
              src={media.image}
              alt="책 이미지"
            />
          </Link>
        </div>
      );
    } else if (media.type == "Article") {
      console.log(media.link);
      return <ArrowButton link={media.link} title="원본 보러가기" />;
    } else {
      return <></>;
    }
  };
  return getMedia();
};
