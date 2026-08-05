import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineBriefcase,
} from "react-icons/hi2";
import SectionTitle from "../SectionTitle/SectionTitle";

const info = [
  { icon: HiOutlineMapPin, label: "Location", value: "Rajshahi, Bangladesh" },
  { icon: HiOutlineAcademicCap, label: "Education", value: "B.Sc. in CSE" },
  {
    icon: HiOutlineChartBar,
    label: "Experience Level",
    value: "Junior · 1+ yr",
  },
  {
    icon: HiOutlineBriefcase,
    label: "Available For",
    value: "Full-time & Freelance",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-surface-alt py-24 dark:bg-surface-alt-dk">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          heading="A little about me"
          description="Where I've studied, what I focus on, and what I'm looking for next."
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 text-ink-soft dark:text-ink-soft-dk"
          >
            <p>
              I'm a Computer Science & Engineering student with a growing
              interest in modern web development. I enjoy building responsive,
              user-friendly websites and continuously improving my programming
              and problem-solving skills.
            </p>
            <p>
              My current focus is learning React, Node.js, Express.js, and
              MongoDB while strengthening my understanding of JavaScript and
              full-stack development. I enjoy turning ideas into practical
              projects and writing clean, maintainable code.
            </p>
            <p>
              I'm looking for opportunities to gain real-world experience,
              collaborate with other developers, and continue growing as a
              software developer by working on meaningful projects and learning
              new technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {info.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl bg-white p-5 shadow-sm dark:bg-surface-dk"
              >
                <Icon className="mb-3 text-2xl text-accent dark:text-accent-soft" />
                <p className="text-xs font-mono text-ink-soft dark:text-ink-soft-dk">
                  {label}
                </p>
                <p className="font-medium text-ink dark:text-ink-dk">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
