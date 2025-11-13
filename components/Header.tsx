import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <div className="pb-0 px-4 sm:px-6 md:px-16 py-6 md:py-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/header.png"
            alt="logo"
            width={60}
            height={60}
            className="object-contain shrink-0"
            priority
          />
          <h1 className="font-header font-extralight text-3xl sm:text-4xl md:text-6xl tracking-[-2px] py-2 leading-none">
            jny0444
          </h1>
        </div>
        <Navbar />
      </div>
    </>
  );
}
