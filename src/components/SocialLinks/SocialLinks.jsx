import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const links = [
  { name: "GitHub", href: "https://github.com/sarwar-jahan1", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sarwar01/", icon: FaLinkedin },
  { name: "Facebook", href: "https://www.facebook.com/md.sarwar.839156/", icon: FaFacebook },
  { name: "X (Twitter)", href: "https://x.com/SarwarJahas", icon: FaXTwitter },
  { name: "Email", href: "sarwarjahans2001@gmail.com", icon: HiOutlineMail },
];

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink-soft transition-colors hover:border-accent hover:text-accent dark:border-white/10 dark:text-ink-soft-dk dark:hover:border-accent-soft dark:hover:text-accent-soft"
          >
            <Icon className="text-lg" />
          </a>
        </li>
      ))}
    </ul>
  );
}
