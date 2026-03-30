import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experiences } from '../data/portfolio';

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Professional exposure through hands-on internship work."
        description="My internship experience helped me understand real-world software development workflows, backend implementation, and collaborative project execution."
      />

      <div className="mt-12 space-y-6">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-card relative overflow-hidden p-6 shadow-soft"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-secondary" />
            <div className="pl-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                  <p className="text-sm text-secondary">{experience.company}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                  {experience.period}
                </span>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                {experience.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
