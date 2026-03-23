import { personalInfo } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function ResumeSection() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <SectionHeading
          eyebrow="Resume"
          title="Quick access for recruiters and hiring teams"
          description="A downloadable resume and an embedded preview for quick review."
        />

        <div className="resume-panel glass-card reveal">
          <div className="resume-actions">
            <a className="button" href={personalInfo.resumePath} download>
              Download Resume
            </a>
            <a className="button button-ghost" href={personalInfo.resumePath} target="_blank" rel="noreferrer">
              View PDF
            </a>
          </div>

          <div className="resume-preview">
            <iframe
              title="Resume preview"
              src={personalInfo.resumePath}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
