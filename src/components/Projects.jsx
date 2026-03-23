import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Other work I’m proud of"
          description="A few projects that reflect how I like to operate: practical problem solving, strong execution, and attention to product quality."
        />

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <div>
                <p className="card-kicker">{project.title}</p>
                <p className="project-summary">{project.summary}</p>
              </div>

              <div className="tech-stack compact">
                {project.technologies.map((technology) => (
                  <span className="tag" key={`${project.title}-${technology}`}>
                    {technology}
                  </span>
                ))}
              </div>

              <p className="project-impact">{project.impact}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
