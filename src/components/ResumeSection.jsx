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

        <div className="resume-layout">
          <div className="glass-card resume-copy reveal">
            <h3>Resume ready for download</h3>
            <p>
              The current PDF is stored at
              {" "}
              <code>public/assets/omar-el-terras-resume.pdf</code>.
            </p>
            <div className="hero-actions">
              <a className="button" href={personalInfo.resumePath} download>
                Download Resume
              </a>
              <a className="button button-ghost" href={personalInfo.resumePath} target="_blank" rel="noreferrer">
                Open PDF
              </a>
            </div>
          </div>

          <div className="resume-preview reveal">
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
