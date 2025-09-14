"use client";

import { FiArrowUpLeft } from "react-icons/fi";
import { useState } from "react";

export default function Card() {
  const [selected, setSelected] = useState("github");
  const links: Record<string, string> = {
    github: "https://github.com/jny0444",
    twitter: "https://twitter.com/jny0444",
    telegram: "https://t.me/jny0444",
  };

  return (
    <>
      <div className="bg-black w-xl h-96 rounded-xl p-4 flex flex-col">
        <div className="flex flex-row justify-between">
          <p className="text-white text-xl font-mono">
            <a href="/">@jny0444 . space</a>
          </p>
          <div className="flex gap-3 items-center">
            <a
              href={links[selected]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl cursor-pointer"
            >
              <FiArrowUpLeft />
            </a>
            <select
              className="text-white text-xl font-mono appearance-none"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="github">github</option>
              <option value="twitter">twitter</option>
              <option value="telegram">telegram</option>
            </select>
          </div>
        </div>
        <p className="text-white text-xl font-mono mt-auto">
          <a href="mailto:thokchom.jnyandeep@gmail.com">
            mail: thokchom.jnyandeep@gmail.com
          </a>
        </p>
      </div>
    </>
  );
}

/*
. . . 0 .
. . 0 0 .
. 0 . 0 .
0 0 0 0 0
. . . 0 .
. . . 0 .
0 0 0 0 0
. . . . .
*/
