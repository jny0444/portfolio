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
        <h1 className="text-lg">Projects</h1>

        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 w-1/6 font-normal">Date</th>
              <th className="text-left px-4 py-2 w-1/6 font-normal">Title</th>
              <th className="text-left px-4 py-2 w-4/6 font-normal">Description</th>
            </tr>
          </thead>
          <tbody>

            {project_2025.map((project, index) => {
              if (project.tags == "Project") {
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
              if (project.tags == "Project") {
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
        </table>
      </div>
    </div>
  );
}
