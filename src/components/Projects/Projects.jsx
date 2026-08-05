import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface-alt py-24 dark:bg-surface-alt-dk">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          heading="Projects"
          description="A few things I've built recently, end to end."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl dark:bg-surface-dk"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-ink-dk">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-soft dark:text-ink-soft-dk">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 pt-1">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent dark:bg-accent-soft/10 dark:text-accent-soft"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <ul className="mt-1 flex list-disc flex-col gap-1 pl-4 text-xs text-ink-soft dark:text-ink-soft-dk">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent dark:text-ink-dk dark:hover:text-accent-soft"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dark dark:text-accent-soft"
                  >
                    Live Demo <HiOutlineArrowTopRightOnSquare />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
