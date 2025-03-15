import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="outer-div grid grid-cols-2 md:grid-cols-5 p-5">
        <div className="text-lg hover:cursor-help">
          Thokchom Jnyandeep Singh
        </div>
        <div className="relative">
          <Image
            src="/sonney-rem.png"
            alt="Sonney"
            fill
            className="object-contain rounded-lg"
            draggable={false}
          />
        </div>
        <div className="hover:cursor-help">
          <p>About</p>
          <p className="text-sm">
            Hi, I am a blockchain dev <br />
            currently studying CS <br />I love building and music
          </p>
        </div>
        <div className="hover:cursor-help">
          <p>Contact</p>
          <p className="text-sm">
            thokchom.jnyandeep
            <br />
            @gmail.com <br />
            <a
              href="
            https://www.linkedin.com/in/thokchom-jnyandeep-singh-7b1b3b1b4/
            "
              className="underline"
            >
              LinkedIn
            </a>
            ,{" "}
            <a href="https://x.com/0xjd_l1" className="underline">
              Twitter
            </a>
            , <br />
            <a href="https://github.com/jny0444" className="underline">
              Github
            </a>
          </p>
        </div>
        <div className="hover:cursor-cell">
          <pre className="whitespace-pre text-[8px] md:text-xs font-mono">
            {String.raw`_______________________ 
| Hire me for goodluck |  
----------------------- 
        \   ^__^
        \   (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
`}
          </pre>
        </div>
        <div className="relative">
          <Image
            src="/(1).png"
            alt="me fr"
            fill
            className="object-contain rounded-lg"
            draggable={false}
          />
        </div>
        <div>
          <p>Quick Links</p>
          <p className="text-sm">
            <a
              href="https://www.youtube.com/watch?v=9bZkp7q19f0"
              className="underline"
            >
              Youtube
            </a>
            ,{" "}
            <a href="https://remove.bg" className="underline">
              Remove.bg
            </a>
            , <br />
            <a href="https://google.com" className="underline">
              Google
            </a>
            ,{" "}
            <a href="https://github.com" className="underline">
              Github
            </a>
            ,
            <br />
            <a href="https://remix.ethereum.org/" className="underline">
              Remix
            </a>
            ,{" "}
            <a href="https://chat.openai.com" className="underline">
              ChatGPT
            </a>
          </p>
        </div>
        <div>
          <p>Current Fav Album</p>
          <p className="text-sm">Grace - Jeff Buckley</p>
          <a
            href="https://open.spotify.com/album/7yQtjAjhtNi76KRu05XWFS"
            className="underline text-sm"
          >
            Spotify
          </a>
        </div>
        <div className="hover: cursor-ne-resize">
          <a href="https://drive.google.com/file/d/1aL4ta6Lz_aRiqDgYuwTWCCMJlC0bWBfe/view?usp=drivesdk">
            <p>Resume</p>
            <p className="text-sm">Updated every now and then</p>
          </a>
        </div>
      </div>
    </div>
  );
}
