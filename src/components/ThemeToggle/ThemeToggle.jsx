import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-9 w-16 items-center rounded-full bg-surface-alt px-1 transition-colors dark:bg-surface-alt-dk"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 dark:bg-surface-dk ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <HiOutlineMoon className="text-accent-soft text-sm" />
        ) : (
          <HiOutlineSun className="text-accent text-sm" />
        )}
      </span>
    </button>
  );
}
