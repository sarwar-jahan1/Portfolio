import { motion } from "framer-motion";

export default function SectionTitle({ subtitle, heading, description, align = "center" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col gap-3 max-w-2xl mb-12 ${alignment}`}
    >
      {subtitle && <span className="eyebrow">{subtitle}</span>}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink dark:text-ink-dk">
        {heading}
      </h2>
      {description && (
        <p className="text-ink-soft dark:text-ink-soft-dk text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
