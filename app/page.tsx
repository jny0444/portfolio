"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import AboutAndContact from "@/components/About&Contact";
import CowSay from "@/components/CowSay";
import Coffee from "@/components/Coffe";
import Project2025 from "@/components/Project-2025";
import Project2024 from "@/components/Project-2024";
import LoaderWrapper from "@/components/LoaderWrapper";

export default function Home() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <LoaderWrapper>
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
          <div className="relative">
            <Image
              src="/(1).png"
              alt="me fr"
              fill
              className="object-contain rounded-lg"
              draggable={false}
            />
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
          <div className="hover:cursor-help">
            <p>Blockchain Tech</p>
            <ol className="text-sm">
              <li>Uniswap</li>
              <li>Hardhat</li>
              <li>Foundry</li>
              <li>Wagmi</li>
            </ol>
          </div>
          <div className="hover:cursor-help">
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
          <Project2024 />
        </div>
      </div>
    </LoaderWrapper>
  );
}
