import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies I work with"
          description="A grouped view of the technologies I’ve used across software engineering, test automation, backend systems, and deployment workflows."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card reveal" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span className="tag" key={`${group.title}-${item}`}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
