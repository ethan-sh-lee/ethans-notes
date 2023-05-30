import { Log } from ".contentlayer/generated";
import { format, parseISO } from "date-fns";
import {
  BlackParagraph,
  BlueParagraph,
  GreenParagraph,
  SmallParagraph,
  XSParagraph,
} from "../typo/paragraphs";

export default function DailyLogCard(log: Log) {
  return (
    <div className="flex items-center w-full my-6 -ml-1.5">
      <div className="w-1/12 z-10">
        <div
          className={
            log.state == "success"
              ? "w-3.5 h-3.5 bg-blue-600 rounded-full"
              : "w-3.5 h-3.5 bg-green-600 rounded-full"
          }
        ></div>
      </div>
      <div className="w-11/12">
        <XSParagraph>{format(parseISO(log.date), "LLLL d, yyyy")}</XSParagraph>
        <div className="flex items-baseline flex-row flex-wrap">
          {log.state == "success" ? (
            <>
              <BlackParagraph>문제를 스스로&nbsp;</BlackParagraph>
              <BlueParagraph>해결</BlueParagraph>
              <BlackParagraph>하였습니다.</BlackParagraph>
            </>
          ) : (
            <>
              <GreenParagraph>답안지</GreenParagraph>
              <BlackParagraph>를 참고하여 문제를&nbsp;</BlackParagraph>
              <GreenParagraph>해결</GreenParagraph>
              <BlackParagraph>하였습니다.</BlackParagraph>
            </>
          )}
        </div>
        {<SmallParagraph>{log.description!}</SmallParagraph> ?? null}
      </div>
    </div>
  );
}
