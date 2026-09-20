import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Button from "../Button/Button";
import useActiveSection from "../../hooks/useActiveSection";
import { scrollToSection } from "../../utils/scrollTo";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-surface-dk/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNavClick("home")}
          className="font-display text-lg font-semibold tracking-tight text-ink dark:text-ink-dk"
        >
          limon<span className="text-accent">.</span>dev
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors ${
                  active === item.id
                    ? "text-accent dark:text-accent-soft"
                    : "text-ink-soft hover:text-ink dark:text-ink-soft-dk dark:hover:text-ink-dk"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Button as="a" href="/resume.pdf" target="_blank" variant="outline" className="!px-4 !py-2 text-xs">
            Resume
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
            className="text-2xl text-ink dark:text-ink-dk"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 bg-white px-6 pb-6 md:hidden dark:bg-surface-dk">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`block w-full py-2 text-left text-sm font-medium ${
                  active === item.id
                    ? "text-accent dark:text-accent-soft"
                    : "text-ink-soft dark:text-ink-soft-dk"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
