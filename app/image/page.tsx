"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import TypewriterComponent from "typewriter-effect";

export default function Image() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="fixed top-0 left-0 right-0 flex flex-col items-center justify-center object-cover">
        <video
          src="/horse.mp4"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="min-h-screen min-w-full max-h-screen max-w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-brat blur-[0.7px] z-10">
          <div className="w-[80vmin] md:w-[60vmin] lg:w-[50vmin] xl:w-[40vmin] h-[80vmin] md:h-[60vmin] lg:h-[50vmin] xl:h-[40vmin] flex items-center justify-center">
            <div className="text-justify w-full px-4">
              <TypewriterComponent
                options={{
                  strings: [
                    "will write out stuff later on",
                    "till then deal with this :P",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
