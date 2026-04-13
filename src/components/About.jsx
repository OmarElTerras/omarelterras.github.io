import { aboutStats, personalInfo } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="An engineer who cares about both quality and usefulness"
          description="I’m a recent software engineering graduate with hands-on experience across product development, QA automation, cloud tooling, and applied software."
        />

        <div className="about-grid">
          <div className="glass-card about-copy reveal">
            <p>
              I recently graduated from Western and have built experience
              through internships, team projects, and applied software work.
            </p>
            <p>
              I’m strongest when I can combine solid engineering, clear thinking, and
              practical execution to build software people can rely on.
            </p>
            <div className="about-meta">
              <span>{personalInfo.location}</span>
              <span>Open to software engineering, QA automation, and full-stack roles</span>
            </div>
          </div>

          <div className="highlights-grid stats-grid">
            {aboutStats.map((stat) => (
              <article className="highlight-card stat-card reveal" key={stat.label}>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
