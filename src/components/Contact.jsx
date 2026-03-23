import { contactCopy, personalInfo } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={contactCopy.title}
          description={contactCopy.description}
        />

        <div className="contact-layout">
          <div className="glass-card contact-card reveal">
            <div className="contact-item">
              <span>Email</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="contact-item">
              <span>Phone</span>
              <a href={`tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`}>{personalInfo.phone}</a>
            </div>
            <div className="contact-item">
              <span>GitHub</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">
                OmarElTerras
              </a>
            </div>
            <div className="contact-item">
              <span>LinkedIn</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          </div>

          <form className="glass-card contact-form reveal" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="you@company.com" required />
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me a bit about the role, team, or project."
                required
              />
            </label>
            <button className="button" type="submit">
              Open Email Draft
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
