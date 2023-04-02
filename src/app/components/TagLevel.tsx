import { DailyLog } from "contentlayer/generated";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["700"],
  display: "swap",
  subsets: ["latin"],
});

export default function Tag({ value }: { value: DailyLog["level"] }) {
  if (value == "Lv. 0") {
    return (
      <span
        className={
          inter.className +
          " h-fit text-base text-programmers-lv.0 text-center leading-none"
        }
      >
        Lv. 0
      </span>
    );
  }

  return (
    <span className="inline-flex items-center mr-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-xs font-semibold text-gray-600">
      <span className="ml-1">{value}</span>
    </span>
  );
}
