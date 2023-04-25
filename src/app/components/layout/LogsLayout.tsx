import { Log } from "contentlayer/generated"
import "@/styles/prism-darcula.css";
import "@/styles/prism.css";
import DailyLogCard from "../card/DailyLogCard";

export const LogsLayout = ({ logs }: { logs: Log[] }) => {
    return (
        <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-extrabold dark:text-white">로그</h2>
            <p className="my-4 text-lg text-gray-500">문제 해결 로그입니다.</p>
            <div className="flex-1 bg-neutral-50-50 dark:bg-gray-900 rounded-lg shadow-xl my-4 p-2 md:p-4">
                <div className="relative px-2 md:px-4">
                    <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
                    {logs.map((log, idx) => (
                        <DailyLogCard key={idx} {...log} />
                    ))}
                </div>
            </div>
        </div>
    )
}