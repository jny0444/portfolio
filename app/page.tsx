import AsciiAnimation from "@/components/CowFrames";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-2 min-h-screen p-2">
      <div className="flex flex-col items-center justify-center">
        <Image src="/img.png" alt="image" width={300} height={500} />
        <h1>
          <b>Thokchom Jnyandeep Singh</b>
        </h1>
        <h2>Hi, I am Blockchain dev and I like CS topics</h2>
        <p>
          contact me @{" "}
          <a href="mailto:thokchom.jnyandeep@gmail.com">
            <i>thokchom.jnyandeep@gmail.com</i>
          </a>
        </p>
        <ul className="flex items-center space-x-2 mt-4">
          <li>
            <a href="https://github.com/jny0444">
              <i>github</i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/thokchom-jnyandeep-singh-54012a288/">
              <i>linkedin</i>
            </a>
          </li>
          <li>
            <a href="https://x.com/jny0444">
              <i>x</i>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1WTNKJYFPrWsDNTZvwf1WiQJRU3DCD3EZ/view?usp=sharing">
              <i>resume</i>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full h-full  bg-black rounded-lg shadow-md">
          <AsciiAnimation />
        </div>
      </div>
      </div>
  );
}
