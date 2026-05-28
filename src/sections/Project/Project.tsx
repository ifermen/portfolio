import { useEffect, useRef, useState } from "react";
import { useDataContext } from "../../contexts/DataContext"
import { ProjectItem } from "./ProjectItem";

export function Project() {

  const { projects } = useDataContext();
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onScroll = () => {
      const cardWidth = el.scrollWidth / projects.length
      setActiveIndex(Math.round(el.scrollLeft / cardWidth))
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [projects.length])

  return (
    <section className="flex flex-col gap-5 p-5">
      <h2 className="font-mono text-accent-light" id="project">
        // 02 proyectos
      </h2>
      <h3 className="sm:text-3xl text-xl">
        Cosas que he construido
      </h3>
      <div className="hidden sm:grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
        {projects.map(p => (
          <ProjectItem project={p} />
        ))}
      </div>
      <div ref={scrollRef} className="flex sm:hidden gap-4 overflow-x-auto snap-x snap-mandatory px-6 scrollbar-none">
        {projects.map(p => (
          <div className="snap-start shrink-0 w-[80vw] max-w-sm">
            <ProjectItem project={p} />
          </div>
        ))}
      </div>
      {/* indicadores de posición */}
      <div className="flex sm:hidden justify-center gap-1.5 mt-4">
        {projects.map((_, i) => (
          <div key={i} className={`h-1 rounded-full transition-all duration-300
            ${i === activeIndex ? 'w-4 bg-accent' : 'w-1.5 bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  )
}