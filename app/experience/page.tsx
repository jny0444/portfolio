"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { project_2024 } from "@/constants/project-2024";
import { project_2025 } from "@/constants/project-2025";
import Image from "next/image";

export default function Project() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="mx-1 p-4">
        <h1 className="text-lg">Experience</h1>

        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 w-1/6 font-normal">Date</th>
              <th className="text-left px-4 py-2 w-1/6 font-normal">Title</th>
              <th className="text-left px-4 py-2 w-4/6 font-normal">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {project_2025.map((project, index) => {
              if (project.tags == "Experience") {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2 w-1/6">{project.date}</td>
                    <td className="px-4 py-2 w-1/6">{project.title}</td>
                    <td className="px-4 py-2 w-4/6">{project.description}</td>
                  </tr>
                );
              }
            })}
          </tbody>
          <tbody>
            {project_2024.map((project, index) => {
              if (project.tags == "Experience") {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2 w-1/6"></td>
                    <td className="px-4 py-2 w-1/6"></td>
                    <td className="px-4 py-2 w-4/6"></td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>

        {/* Fixed position container for centered images */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center mt-4">
              <Image
                src="/flies.gif"
                alt="flies"
                width={0}
                height={0}
                className="rotate-90 w-32 sm:w-60 md:w-80 lg:w-[200px] h-auto"
              />
              <Image
                src="/flies.gif"
                alt="flies"
                width={0}
                height={0}
                className="w-32 sm:w-60 md:w-80 lg:w-[200px] h-auto"
              />
              <Image
                src="/flies.gif"
                alt="flies"
                width={0}
                height={0}
                className="rotate-180 w-32 sm:w-60 md:w-80 lg:w-[200px] h-auto"
              />
            </div>
            <div className="flex justify-center mt-4">
              <Image
                src="/flies.gif"
                alt="flies"
                width={0}
                height={0}
                className="-rotate-12 w-32 sm:w-60 md:w-80 lg:w-[200px] h-auto"
              />
              <Image
                src="/flies.gif"
                alt="flies"
                width={0}
                height={0}
                className="w-32 sm:w-60 md:w-80 lg:w-[200px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
