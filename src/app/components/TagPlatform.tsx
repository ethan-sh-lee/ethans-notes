import { DailyLog } from "contentlayer/generated";
import ProgrammersLogo from "./ProgrammersLogo";
import BaekjoonLogo from "./BaekjoonLogo";

export default function TagPlatform({
  value,
}: {
  value: DailyLog["platform"];
}) {
  if (value === "프로그래머스") {
    return <ProgrammersLogo />;
  } else if (value === "백준") {
    return <BaekjoonLogo />;
  } else {
    return (
      <span className="inline-flex items-center mr-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-xs font-semibold text-gray-600">
        <span className="ml-1">{value}</span>
      </span>
    );
  }
}
