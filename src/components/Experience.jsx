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

      {/* Timeline */}
      <div className="relative mt-10 space-y-6 xs:mt-12 xs:space-y-8">
        {/* Vertical line — only on md+ */}
        <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-accent via-secondary to-transparent md:left-6 md:block" />

        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="relative md:pl-16"
          >
            {/* Timeline icon bubble */}
            <div className="absolute left-0 top-5 hidden h-10 w-10 place-items-center rounded-xl border border-white/10 bg-slate-950 text-secondary shadow-glow md:grid md:h-12 md:w-12 md:rounded-2xl">
              {experience.status === 'Current' ? <Cpu size={20} /> : <BriefcaseBusiness size={20} />}
            </div>

            <div className="glass-card relative overflow-hidden p-4 shadow-soft xs:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent" />

              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                {/* Main content */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 xs:gap-3">
                    <span className="rounded-full border border-secondary/20 bg-secondary/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-secondary xs:px-3 xs:tracking-[0.16em] xs:text-xs">
                      {experience.status}
                    </span>
                    <span className="text-xs text-slate-400 xs:text-sm">{experience.period}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white xs:mt-4 xs:text-xl sm:text-2xl">{experience.role}</h3>
                  <p className="mt-0.5 text-sm font-medium text-secondary">{experience.company}</p>
                  <p className="mt-3 text-xs leading-6 text-slate-300 xs:mt-4 xs:text-sm xs:leading-7">{experience.description}</p>
                </div>

                {/* Focus areas */}
                <div className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-3 xs:rounded-2xl xs:p-4 lg:min-w-[200px]">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 xs:text-xs">Focus Areas</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5 xs:mt-3 xs:gap-2">
                    {experience.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-950/60 px-2 py-1 text-[10px] text-slate-300 xs:px-3 xs:py-1.5 xs:text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bullet points */}
              <div className="mt-4 grid gap-2.5 xs:mt-6 xs:gap-3 sm:grid-cols-2">
                {experience.points.map((point) => (
                  <div
                    key={point}
                    className="flex gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 xs:gap-3 xs:rounded-2xl xs:p-4"
                  >
                    <CheckCircle2 className="mt-0.5 shrink-0 text-secondary" size={16} />
                    <p className="text-xs leading-5 text-slate-300 xs:text-sm xs:leading-6">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Achievements grid */}
      <div className="mt-10 grid gap-4 xs:mt-12 xs:gap-5 sm:grid-cols-2">
        {achievements.map((achievement) => {
          const Icon = achievementIcons[achievement.title] || Award;

          return (
            <article
              key={achievement.title}
              className="glass-card p-4 shadow-soft transition hover:-translate-y-1 hover:border-accent/30 xs:p-6"
            >
              <div className="flex items-start gap-3 xs:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent xs:h-12 xs:w-12 xs:rounded-2xl">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 xs:text-xs">{achievement.period}</p>
                  <h3 className="mt-1.5 text-base font-semibold text-white xs:mt-2 xs:text-xl">{achievement.title}</h3>
                  <p className="mt-0.5 text-xs font-medium text-secondary xs:text-sm">{achievement.organization}</p>
                  <p className="mt-2.5 text-xs leading-6 text-slate-300 xs:mt-3 xs:text-sm xs:leading-7">{achievement.description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
