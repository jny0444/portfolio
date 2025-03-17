import { project_2025 } from "@/constants/project-2025";
import LinkTo from "./LinkTo";
import Image from "next/image";

export default function Project2025() {
  return (
    <>
      <div id="2025">2025</div>
      {project_2025.map((project, index) => {
        if (index < 4) {
          return (
            <div key={index} className={project.tags.toLowerCase()}>
              <LinkTo href={project.link as string} underline="underline">
                <p className="text-base">{project.title}</p>
                <p className="text-sm">{project.description}</p>
                <p className="text-sm">{project.date}</p>
                <p className="text-sm">{`[${project.tags}]`}</p>
              </LinkTo>
            </div>
          );
        }
      })}

      <div className="relative" key="bee">
        <Image
          src="/bee.gif"
          alt="bee"
          fill
          className="object-contain rounded-lg"
          draggable={false}
        />
      </div>

      {project_2025.map((project, index) => {
        if (index >= 4) {
          return (
            <div key={index} className={project.tags.toLowerCase()}>
              <LinkTo href={project.link as string} underline="underline">
                <p className="text-base">{project.title}</p>
                <p className="text-sm">{project.description}</p>
                <p className="text-sm">{project.date}</p>
                <p className="text-sm">{`[${project.tags}]`}</p>
              </LinkTo>
            </div>
          );
        }
      })}
    </>
  );
}
