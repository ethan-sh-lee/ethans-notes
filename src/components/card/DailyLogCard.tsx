import { Log } from ".contentlayer/generated";
import { format, parseISO } from "date-fns";
import { BlackParagraph, BlueParagraph, RedParagraph, SmallParagraph, XSParagraph } from "../typo/paragraphs";

export default function DailyLogCard(log: Log) {
    return (
        <div className="flex items-center w-full my-6 -ml-1.5">
            <div className="w-1/12 z-10">
                <div
                    className={
                        log.isOk
                            ? "w-3.5 h-3.5 bg-blue-600 rounded-full"
                            : "w-3.5 h-3.5 bg-red-600 rounded-full"
                    }
                ></div>
            </div>
            <div className="w-11/12">
                <XSParagraph>
                    {format(parseISO(log.date), "LLLL d, yyyy")}
                </XSParagraph>
                <div className="flex items-baseline flex-row flex-wrap gap-1">
                    <BlackParagraph>{"문제를 해결하는데"}</BlackParagraph>
                    {log.isOk ? (
                        <BlueParagraph>{"성공"}</BlueParagraph>
                    ) : (
                        <RedParagraph>{"실패"}</RedParagraph>
                    )}
                    <BlackParagraph>{"하였습니다."}</BlackParagraph>
                </div>
                {(
                    <SmallParagraph>
                        {log.description!}
                    </SmallParagraph>
                ) ?? null}
            </div>
        </div>
    );
}