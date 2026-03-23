import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolio";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function ResumeSection() {
  const previewContainerRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(860);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const container = previewContainerRef.current;

    if (!container) {
      return undefined;
    }

    const updateWidth = () => {
      setPageWidth(Math.min(container.clientWidth - 24, 860));
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

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
            <div className="resume-document-shell" ref={previewContainerRef}>
              <Document
                file={personalInfo.resumePath}
                loading={<div className="resume-loading">Loading resume preview...</div>}
                onLoadSuccess={({ numPages }) => setPageCount(numPages)}
              >
                {Array.from({ length: pageCount }, (_, index) => (
                  <Page
                    key={`resume-page-${index + 1}`}
                    pageNumber={index + 1}
                    width={pageWidth}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
