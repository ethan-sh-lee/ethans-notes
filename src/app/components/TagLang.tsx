import { DailyLog } from "contentlayer/generated";
import Image from "next/image";
import cppLogo from "../../../public/image/cpp_logo.png";

export default function Tag({ value }: { value: DailyLog["lang"] }) {
  if (value === "cpp") {
    return <Image src={cppLogo} height={20} width={20} alt="cpp" />;
  } else {
    return (
      <span className="inline-flex items-center px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-xs font-semibold text-gray-600">
        <span className="ml-1">{value}</span>
      </span>
    );
  }
}
