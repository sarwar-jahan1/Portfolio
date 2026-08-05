import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";
import skills from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          
          heading="Skills & tools"
          description="Technologies I use regularly to design, build, and ship software."
        />

        <div className="flex flex-col gap-12">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-5 font-display text-lg font-semibold text-ink dark:text-ink-dk">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                {group.items.map(({ name, icon: Icon }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-ink/5 bg-surface-alt p-4 text-center shadow-sm transition-shadow hover:shadow-md dark:border-white/5 dark:bg-surface-alt-dk"
                  >
                    <Icon className="text-3xl text-accent dark:text-accent-soft" />
                    <span className="text-xs font-medium text-ink-soft dark:text-ink-soft-dk">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
