"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import LinkTo from "@/components/LinkTo";
import QuickLinks from "@/components/QuickLinks";
import AboutAndContact from "@/components/About&Contact";
import CowSay from "@/components/CowSay";
import Coffee from "@/components/Coffe";
import Project2025 from "@/components/Project-2025";

export default function Home() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />

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
        <AboutAndContact />
        <CowSay />
        <div className="relative">
          <Image
            src="/(1).png"
            alt="me fr"
            fill
            className="object-contain rounded-lg"
            draggable={false}
          />
        </div>
        <QuickLinks />
        <div>
          <p>Current Fav Album</p>
          <p className="text-sm">Grace - Jeff Buckley</p>
          <LinkTo href="https://open.spotify.com/album/7yQtjAjhtNi76KRu05XWFS">
            Spotify
          </LinkTo>
        </div>
        <div className="hover:cursor-ne-resize">
          <a
            href="https://drive.google.com/file/d/1aL4ta6Lz_aRiqDgYuwTWCCMJlC0bWBfe/view?usp=drivesdk"
            className="hover:cursor-ne-resize"
          >
            <p className="cursor-ne-resize">Resume</p>
            <p className="text-sm cursor-ne-resize">
              Updated every now and then
            </p>
          </a>
        </div>
        <div className="hover:cursor-help">
          <p>Languages</p>
          <ol className="text-sm">
            <li>Solidity</li>
            <li>Rust</li>
            <li>JS</li>
            <li>C/C++</li>
          </ol>
        </div>
        <div>
          <p>Blockchain Tech</p>
          <ol className="text-sm">
            <li>IPFS</li>
            <li>Hardhat</li>
            <li>Foundry</li>
            <li>Wagmi</li>
          </ol>
        </div>
        <div>
          <p>Web Tech</p>
          <ol className="text-sm">
            <li>Next.js</li>
            <li>React</li>
            <li>Typescript</li>
          </ol>
        </div>
        <Coffee />
        <div className="hover:cursor-copy">
          <p>Design</p>
          <p>Heavily inspired by</p>
          <a href="https://chia.design" className="text-sm underline">
            chia.design
          </a>
        </div>
        <Project2025 />
      </div>
    </div>
  );
}
