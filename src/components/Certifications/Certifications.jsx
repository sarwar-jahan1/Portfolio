import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import SectionTitle from "../SectionTitle/SectionTitle";
import certifications from "../../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-surface-alt py-24 dark:bg-surface-alt-dk">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          heading="Certifications"
          description="Courses and credentials that back up my skill set."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg dark:bg-surface-dk"
            >
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                loading="lazy"
                className="h-40 w-full object-cover"
              />
              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-display font-semibold text-ink dark:text-ink-dk">
                  {cert.title}
                </h3>
                <p className="text-sm text-ink-soft dark:text-ink-soft-dk">
                  {cert.organization} · {cert.date}
                </p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dark dark:text-accent-soft"
                >
                  View Credential <HiOutlineArrowTopRightOnSquare />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
