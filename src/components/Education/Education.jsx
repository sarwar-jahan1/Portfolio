import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";
import education from "../../data/education";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          
          heading="Education"
          description="My academic background, in order."
        />

        <ol className="relative flex flex-col gap-10 border-l border-ink/10 pl-8 dark:border-white/10">
          {education.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[2.55rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent font-mono text-[10px] font-semibold text-white dark:bg-accent-soft dark:text-surface-dk">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-mono text-xs text-accent dark:text-accent-soft">
                {item.duration}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink dark:text-ink-dk">
                {item.degree}
              </h3>
              <p className="text-sm font-medium text-ink-soft dark:text-ink-soft-dk">
                {item.institution}
              </p>
              <p className="mt-2 text-sm text-ink-soft dark:text-ink-soft-dk">
                {item.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
