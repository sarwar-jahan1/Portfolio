import { motion } from "framer-motion";
import {
  HiOutlineArrowDownTray,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import Button from "../Button/Button";
import SocialLinks from "../SocialLinks/SocialLinks";
import useTypewriter from "../../hooks/useTypewriter";
import { scrollToSection } from "../../utils/scrollTo";
import sarwar from "../../assets/sarwar.jpeg";

const titles = ["Frontend Developer", "React Developer", "Next.js Developer"];

export default function Hero() {
  const typed = useTypewriter(titles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-soft/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl dark:text-ink-dk">
            I'm Sarwar
          </h1>
          <p className="font-mono text-xl text-accent dark:text-accent-soft h-8">
            {typed}
            <span className="animate-pulse">|</span>
          </p>
          <p className="max-w-md text-ink-soft dark:text-ink-soft-dk">
            I build fast, accessible web applications end-to-end — from polished
            interfaces to the APIs that power them.
          </p>

          <div className="mt-2 flex flex-wrap gap-4">
            <Button
              as="a"
              href="/resume.pdf"
              download
              variant="primary"
              icon={HiOutlineArrowDownTray}
            >
              Download Resume
            </Button>
            <Button
              variant="outline"
              icon={HiOutlineChatBubbleLeftRight}
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          <SocialLinks className="mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl bg-accent/20" />
          <img
            src={sarwar}
            alt="Portrait of Sarwar, software developer"
            className="h-80 w-80 rounded-3xl object-cover shadow-xl sm:h-96 sm:w-96"
          />
        </motion.div>
      </div>
    </section>
  );
}
