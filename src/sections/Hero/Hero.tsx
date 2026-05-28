import { useDataContext } from "../../contexts/DataContext";
import github from "../../assets/icon/github-accent-light.svg";
import profile from "../../assets/Profile.jpg"

export function Hero() {
  const { hero } = useDataContext();

  return (
    <section className="flex flex-col gap-5 p-5">
      <span className="hidden text-accent-light bg-[rgba(107,92,244,0.15)] sm:flex flex-row items-center gap-2 px-3 py-0.5 w-fit rounded-full border border-accent-light/25 font-mono">
        <span className="w-3 h-3 rounded-full bg-[#6FCF97] shadow-[0_0_0_3px_rgba(111,207,151,0.2)] animate-pulse"></span>
        Open to work
      </span>
      <div className="flex flex-col-reverse sm:flex-row items-center gap-5 w-full justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="sm:text-4xl text-center sm:text-start text-2xl">{hero.fullName}</h2>
            <h3 className="text-accent sm:text-lg font-mono text-center sm:text-start">
              // {hero.headLine}
            </h3>
          </div>
          <p className="text-text-muted sm:text-md text-sm text-justify">
            {hero.introduction}
          </p>
        </div>
        <div className="shrink-0 text-5xl w-40 h-40 rounded-full bg-background-alt border-2 border-accent flex items-center justify-center text-accent-light font-medium overflow-hidden">
          <img src={profile} alt="" className="object-cover border-none center object-center" />
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full">
        <a className="w-full sm:w-fit" href={hero.github}>
          <button className="w-full sm:w-fit border border-accent-light/30 py-2 px-6 rounded-lg text-accent-light flex flex-row items-center justify-center gap-1 transition-all duration-200 hover:bg-accent/10 hover:border-accent-light/50 hover:-translate-y-0.5 active:translate-y-0 active:bg-accent/5 cursor-pointer">
            <img src={github} className="h-full w-5" />
            GitHub
          </button>
        </a>
      </div>
    </section>
  );
}
