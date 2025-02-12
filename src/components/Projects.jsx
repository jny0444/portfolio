import React from "react";
import { project } from "../assets/projects/project";

const Projects = () => {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="font-['Xanh_Mono']">
        <span className="text-[#98be65] text-xl sm:text-2xl">◆ </span>
        <span className="text-xl sm:text-2xl">Projects</span>
      </div>
      <div className="ml-4 sm:ml-6 mt-2 space-y-4">
        {project.map((proj, index) => (
          <div key={index} className="group">
            <div className="font-['Xanh_Mono']">
              <span className="text-[#98be65] text-lg sm:text-xl">◇ </span>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl hover:text-[#98be65] transition-colors"
              >
                {proj.title}
              </a>
            </div>
            <div className="ml-4 sm:ml-6 space-y-2">
              <p className="text-sm sm:text-base">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-[#2a2e38] text-[#98be65] rounded-md font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full max-w-lg rounded-md opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
