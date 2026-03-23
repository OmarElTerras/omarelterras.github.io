import { navLinks, personalInfo } from "../data/portfolio";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand-mark" href="#top" aria-label="Go to top">
          <span>OE</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="button button-small button-ghost" href={personalInfo.resumePath} download>
          View Resume
        </a>
      </div>
    </header>
  );
}
