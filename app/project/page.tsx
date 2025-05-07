"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { project_2024 } from "@/constants/project-2024";
import { project_2025 } from "@/constants/project-2025";

export default function Project() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="mx-1 p-4">
        <h1 className="text-4xl">Projects</h1>

        <table className="table-auto w-full mt-4 border border-black">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">Date</th>
              <th className="border border-black px-4 py-2">Title</th>
              <th className="border border-black px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {project_2025.map((project, index) => {
              return (<tr key={index}>
                <td className="px-4 py-2">{project.date}</td>
                <td className="px-4 py-2">{project.title}</td>
                <td className="px-4 py-2">{project.description}</td>
              </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
