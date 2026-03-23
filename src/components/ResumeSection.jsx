import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolio";

export default function ResumeSection() {
  const previewPath = `${personalInfo.resumePath}#toolbar=0&navpanes=0&scrollbar=1&zoom=page-width`;

  return (
    <section className="section" id="resume">
      <div className="container">
        <SectionHeading
          eyebrow="Resume"
          title="Resume"
          description="View or download my latest resume."
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
            <object
              className="resume-object"
              data={previewPath}
              type="application/pdf"
              aria-label="Resume preview"
            >
              <div className="resume-fallback">
                <p>Preview unavailable in this browser.</p>
                <a className="button button-ghost" href={personalInfo.resumePath} target="_blank" rel="noreferrer">
                  Open PDF
                </a>
              </div>
            </object>
          </div>
        </div>
      </div>
    </section>
  );
}
