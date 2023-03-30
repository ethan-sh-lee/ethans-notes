import { DailyLog } from "contentlayer/generated";

export default function Tag({ value }: { value: DailyLog["level"] }) {
  return (
    <span className="inline-flex items-center mr-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-xs font-semibold text-gray-600">
      <span className="ml-1">{value}</span>
    </span>
  );
}
