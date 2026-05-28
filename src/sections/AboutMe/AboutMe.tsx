import { useDataContext } from "../../contexts/DataContext"
import { LineHorizontal } from "../../components/Line/LineHorizontal";
import { Tag } from "../../components/Tag/Tag";

export function AboutMe() {

  const { aboutMe } = useDataContext();

  return (
    <section className="flex flex-col gap-5 p-5">
      <h2 className="font-mono text-accent-light" id="aboutMe">
        // 01 sobre mí
      </h2>
      <div className="flex flex-col sm:flex-row sm:gap-14">
        <div>
          <h3 className="sm:text-3xl text-xl">
            {aboutMe.headLine}
          </h3>
          {aboutMe.content.map((p, i) => (
            <div key={i}>
              <p className="text-text-muted py-3 text-justify text-sm">{p}</p>
              {i != aboutMe.content.length - 1 ? <LineHorizontal /> : ""}
            </div>
          ))}
        </div>
        <div className="w-full">
          <h3 className="sm:text-text-muted sm:text-start text-center">stack principal</h3>
          <div className="flex flex-row gap-2 flex-wrap py-4">
            {aboutMe.principalStack.map((skill, i) => (
              <Tag key={i} style="active">{skill}</Tag>
            ))}
          </div>
          <LineHorizontal />
          <h3 className="pt-4 sm:text-text-muted sm:text-start text-center">también he usado</h3>
          <div className="flex flex-row gap-2 flex-wrap py-4">
            {aboutMe.secondaryStack.map((skill, i) => (
              <Tag key={i} style="muted">
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}