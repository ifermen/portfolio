import { LineVertical } from "../../components/Line/LineVertical";
import { Tag } from "../../components/Tag/Tag";
import { useDataContext } from "../../contexts/DataContext";
import dot from "../../assets/icon/dot-circle-accent-light.svg";

export function Experience() {

  const { experience } = useDataContext();

  return (
    <section className="flex flex-col gap-5 p-5">
      <h2 className="font-mono text-accent-light" id="experience">
        // 03 experiencia
      </h2>
      <h3 className="sm:text-3xl text-xl">
        Por dónde he pasado
      </h3>
      <div>
        {experience.map(experienceItem => (
          <article className="flex flex-row gap-1">
            <div className="flex flex-col items-center w-12 gap-1 justify-center py-1">
              <img src={dot} alt="Punto de experiencia" className="w-4 h-4" />
              <div className="h-full">
                <LineVertical color="light" />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <span className="font-bold text-md sm:text-lg">{experienceItem.title}</span>
              <span className="text-accent font-mono sm:text-md text-sm text-justify">{experienceItem.whereWhen}</span>
              <p className="text-text-muted font-light sm:text-md text-sm  text-justify">{experienceItem.description}</p>
              <div className="flex flex-row gap-1 flex-wrap mt-4 mb-6">
                {experienceItem.stack.map(item => (
                  <Tag style="active">
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}