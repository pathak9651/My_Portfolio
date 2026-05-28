import { motion } from 'framer-motion';
import { Award, BriefcaseBusiness, CheckCircle2, Cpu, Presentation } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { achievements, experiences } from '../data/portfolio';

const achievementIcons = {
  'Data Science Workshop': Award,
  'Paper Presentation': Presentation,
};

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Hands-on experience across full stack development, IoT integration, and applied ML."
        description="My recent work includes real project exposure at Invas Technologies, IoT-enabled fire safety workflows, Smart Kheti development, ML model integration, and academic participation in data science and cybersecurity forums."
      />

      <div className="relative mt-12 space-y-8">
        <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-accent via-secondary to-transparent md:block" />

        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative md:pl-16"
          >
            <div className="absolute left-0 top-6 hidden h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-slate-950 text-secondary shadow-glow md:grid">
              {experience.status === 'Current' ? <Cpu size={22} /> : <BriefcaseBusiness size={22} />}
            </div>

            <div className="glass-card relative overflow-hidden p-6 shadow-soft">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent" />
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-secondary">
                      {experience.status}
                    </span>
                    <span className="text-sm text-slate-400">{experience.period}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{experience.role}</h3>
                  <p className="mt-1 text-sm font-medium text-secondary">{experience.company}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{experience.description}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 lg:min-w-56">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Focus Areas</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {experience.points.map((point, pointIndex) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: pointIndex * 0.06 }}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 shrink-0 text-secondary" size={18} />
                    <p className="text-sm leading-6 text-slate-300">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {achievements.map((achievement, index) => {
          const Icon = achievementIcons[achievement.title] || Award;

          return (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{achievement.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{achievement.title}</h3>
                  <p className="mt-1 text-sm font-medium text-secondary">{achievement.organization}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{achievement.description}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
