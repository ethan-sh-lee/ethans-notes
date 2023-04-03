import Image from "next/image";
import logo from "../../../public/image/baekjoon.png";

const BaekjoonLogo = () => {
  return (
    <span className="inline-flex items-center dark:px-2  pl-1    dark:bg-white rounded-full ">
      <Image src={logo} alt="Logo of the baekjoon" width={130} height={130} />
    </span>
  );
};

export default BaekjoonLogo;
