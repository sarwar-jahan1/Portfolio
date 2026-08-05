import SocialLinks from "../SocialLinks/SocialLinks";
import { scrollToSection } from "../../utils/scrollTo";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/5 bg-surface-alt py-12 dark:border-white/5 dark:bg-surface-alt-dk">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-3">
          <button
            onClick={() => scrollToSection("home")}
            className="font-display text-lg font-semibold text-ink dark:text-ink-dk"
          >
            Sarwar<span className="text-accent">.</span>dev
          </button>
          <p className="max-w-xs text-sm text-ink-soft dark:text-ink-soft-dk">
            Building responsive web interfaces while learning backend
            development.
          </p>
          <SocialLinks />
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-ink-soft-dk">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-ink-soft transition-colors hover:text-accent dark:text-ink-soft-dk dark:hover:text-accent-soft"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-ink-soft dark:text-ink-soft-dk">
        © {year} Sarwar Jahan. All rights reserved.
      </p>
    </footer>
  );
}
