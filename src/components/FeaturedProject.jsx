import { featuredProject } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function FeaturedProject() {
  return (
    <section className="section" id="featured-project">
      <div className="container">
        <SectionHeading
          eyebrow={featuredProject.eyebrow}
          title="Medical imaging work with real-world clinical impact"
          description="A deeper look at the kind of software work I enjoy most: technically challenging, user-focused, and grounded in a meaningful outcome."
        />

        <article className="featured-project reveal">
          <div className="featured-copy">
            <p className="card-kicker">{featuredProject.title}</p>
            <h3>{featuredProject.overview}</h3>

            <div className="featured-columns">
              <div>
                <h4>The problem</h4>
                <p>{featuredProject.problem}</p>
              </div>
              <div>
                <h4>What I built</h4>
                <p>{featuredProject.built}</p>
              </div>
            </div>

            <div className="tech-stack">
              {featuredProject.technologies.map((technology) => (
                <span className="tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="impact-grid">
              {featuredProject.impact.map((item) => (
                <div className="impact-card" key={item}>
                  <span className="impact-dot" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="featured-visual">
            <div className="featured-image-frame">
              <img src={featuredProject.imagePath} alt="DAI medical imaging interface" />
            </div>
            <p>{featuredProject.imageCaption}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
