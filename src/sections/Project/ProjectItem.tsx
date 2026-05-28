import { LineHorizontal } from "../../components/Line/LineHorizontal";
import { Tag } from "../../components/Tag/Tag";
import type { Project } from "../../types/type";
import github from "../../assets/icon/github-accent-light.svg";
import link from "../../assets/icon/link-external-accent-light.svg";
import GymHub from "../../assets/GymHub.png";
import GymHubApi from "../../assets/GymHubAPI.png";
import MiniChef from "../../assets/MiniChef.png";
import Portfolio from "../../assets/Portfolio.png";

interface ProjectItemProps {
  project: Project
}
export function ProjectItem({ project }: ProjectItemProps) {

  const img = {
    GymHub: GymHub,
    GymHubApi: GymHubApi,
    MiniChef: MiniChef,
    Portfolio: Portfolio
  }

  return (
    <article className="bg-surface border border-border-light rounded-2xl overflow-hidden h-full">
      <img src={img[project.imgKey]} className="w-full h-60 object-cover border-none center object-center" />
      <LineHorizontal color="light" />
      <div className="p-3 flex flex-col gap-2">
        <span className="font-bold">{project.title}</span>
        <p className="text-text-muted text-sm font-light">{project.introduction}</p>
        <div className="flex flex-row gap-1 flex-wrap mt-2">
          {project.stack.map((item, i) => (
            <Tag key={i} style="active">
              {item}
            </Tag>
          ))}
        </div>
        <div className="flex flex-row gap-3 mt-2 w-full">
          <a className="w-full sm:w-fit">
            <button className="border border-accent-light/30 py-1 px-3 rounded-lg text-accent-light flex flex-row items-center justify-center gap-1 transition-all duration-200 hover:bg-accent/10 hover:border-accent-light/50 hover:-translate-y-0.5 active:translate-y-0 active:bg-accent/5 cursor-pointer w-full sm:w-fit">
              <img src={github} alt="Icono de GitHub" className="h-full w-5" />
              Code
            </button>
          </a>
          <a className="w-full sm:w-fit">
            <button className="border border-accent-light/30 py-1 px-3 rounded-lg text-accent-light flex flex-row items-center justify-center gap-1 transition-all duration-200 hover:bg-accent/10 hover:border-accent-light/50 hover:-translate-y-0.5 active:translate-y-0 active:bg-accent/5 cursor-pointer w-full sm:w-fit">
              <img src={link} alt="Icono de enlace externo" className="h-full w-5" />
              Demo
            </button>
          </a>
        </div>
      </div>
    </article>
  )
}