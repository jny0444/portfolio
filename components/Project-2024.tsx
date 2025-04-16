import { project_2024 } from "@/constants/project-2024";
import LinkTo from "./LinkTo";
import Image from "next/image";

export default function Project2024() {
  return (
    <>
      <div id="2024">2024</div>
      {project_2024.map((project, index) => {
        if (index < 3) {
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
          src="/pig.png"
          alt="pig"
          fill
          className="object-contain rounded-lg"
          draggable={false}
        />
      </div>

      {project_2024.map((project, index) => {
        if (index >= 3) {
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
