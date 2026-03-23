import { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  const roles = personalInfo.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === currentRole) {
          window.setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const nextText = currentRole.slice(0, displayText.length - 1);
        setDisplayText(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="hero-kicker">Software Engineer • QA Automation • Full-Stack</p>
          <h1>{personalInfo.name}</h1>
          <div className="typing-line" aria-live="polite">
            <span>{displayText}</span>
            <span className="typing-caret" aria-hidden="true" />
          </div>
          <p className="hero-headline">{personalInfo.headline}</p>
          <p className="hero-intro">{personalInfo.intro}</p>

          <div className="hero-actions">
            <a className="button" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href={personalInfo.resumePath} download>
              Download Resume
            </a>
            <a className="button button-ghost" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="portrait-frame">
            <img
              src={personalInfo.profileImagePath}
              alt="Portrait of Omar El Terras"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
