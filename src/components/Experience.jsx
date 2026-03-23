import { experiences } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on work across product engineering and automation"
          description="A mix of development, testing, and applied software work with a strong focus on reliability, performance, and user value."
        />

        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-card reveal" key={`${experience.company}-${experience.title}`}>
              <div className="timeline-top">
                <div>
                  <p className="card-kicker">{experience.company}</p>
                  <h3>{experience.title}</h3>
                </div>
                <span className="timeline-period">{experience.period}</span>
              </div>

              <p className="timeline-summary">{experience.summary}</p>

              <ul className="detail-list">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="tag-row">
                {experience.metrics.map((metric) => (
                  <span className="tag" key={metric}>
                    {metric}
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
