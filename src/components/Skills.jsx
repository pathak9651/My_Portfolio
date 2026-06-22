import { motion } from 'framer-motion';
import {
  Braces,
  CodeXml,
  Database,
  GitBranch,
  LayoutPanelTop,
  MessagesSquare,
  Server,
  Wrench,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skills } from '../data/portfolio';

const icons = {
  Frontend: LayoutPanelTop,
  Backend: Server,
  Database: Database,
  Tools: GitBranch,
  'Programming Languages': Braces,
  'Development Workflow': Wrench,
  'Professional Skills': MessagesSquare,
};

const summaries = {
  Frontend: 'Building responsive interfaces with modern React patterns, clean layouts, and user-focused interactions.',
  Backend: 'Creating dependable server-side logic, APIs, and database-connected application workflows.',
  Database: 'Working with structured and document data for practical full stack applications.',
  Tools: 'Using development tools effectively for coding, testing, collaboration, and project delivery.',
  'Programming Languages': 'Writing logic across core programming languages with a strong foundation in problem solving.',
  'Development Workflow':
    'Comfortable using the right tools for development, debugging, learning, API testing, and documentation.',
  'Professional Skills':
    'Clear communication, leadership mindset, and strong collaboration habits for team-based projects.',
};

const featuredSkills = ['React', 'Next.js', 'Java', 'Python', 'Git & GitHub', 'Communication'];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="A practical skill set for building, learning, and delivering with confidence."
        description="My toolkit covers frontend development, backend systems, databases, programming languages, development workflows, and the communication skills needed to work well in collaborative projects."
      />

      {/* Core strengths banner */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card mt-8 overflow-hidden p-4 shadow-soft xs:p-6"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent xs:h-12 xs:w-12 xs:rounded-2xl">
              <CodeXml size={22} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white xs:text-2xl">Core strengths</h3>
            <p className="mt-2 text-xs leading-7 text-slate-300 xs:text-sm lg:max-w-xl">
              I focus on tools and skills that help me ship complete digital products: clean UI,
              stable backend logic, useful data handling, and dependable teamwork.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 xs:grid-cols-3 xs:gap-3 lg:min-w-[280px]">
            {featuredSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-center text-xs font-medium text-slate-100 xs:rounded-2xl xs:px-4 xs:py-3 xs:text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Skills cards grid: 1-col → 2-col (sm) → 2-col (lg) → 3-col (xl) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6"
      >
        {skills.map((group, index) => {
          const Icon = icons[group.title] || CodeXml;
          const circumference = 2 * Math.PI * 42;
          const dashOffset = circumference - (circumference * group.level) / 100;
          const gradientId = `skillGradient-${group.title.replace(/\s+/g, '')}`;

          return (
            <motion.article
              key={group.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card group relative overflow-hidden p-4 shadow-soft xs:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent opacity-70" />
              <motion.div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl"
                animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.8, 0.45] }}
                transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Title row with circular progress */}
              <div className="flex flex-col gap-3 xs:flex-row xs:items-center xs:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary xs:h-12 xs:w-12 xs:rounded-2xl">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-white xs:text-xl">{group.title}</h3>
                    <p className="text-xs text-slate-400">{group.level}% working confidence</p>
                  </div>
                </div>

                <div className="relative h-20 w-20 shrink-0 self-center xs:h-24 xs:w-24">
                  <svg className="h-20 w-20 -rotate-90 xs:h-24 xs:w-24" viewBox="0 0 100 100" aria-hidden="true">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="9"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke={`url(#${gradientId})`}
                      strokeLinecap="round"
                      strokeWidth="9"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset: dashOffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.15 + index * 0.06, ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
                        <stop stopColor="#6366f1" />
                        <stop offset="1" stopColor="#22c55e" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 grid place-items-center text-xs font-semibold text-white xs:text-sm">
                    {group.level}%
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs leading-6 text-slate-300 xs:text-sm xs:leading-7">{summaries[group.title]}</p>

              {/* Progress bar */}
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + index * 0.05 }}
                  className="h-1.5 rounded-full bg-gradient-to-r from-accent to-secondary"
                />
              </div>

              {/* Skill tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.04 }}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 transition group-hover:border-secondary/20 xs:py-1.5"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Skills;
