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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card mt-10 overflow-hidden p-6 shadow-soft"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <CodeXml size={24} />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">Core strengths</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              I focus on tools and skills that help me ship complete digital products: clean UI,
              stable backend logic, useful data handling, and dependable teamwork.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {featuredSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-center text-sm font-medium text-slate-100"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
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
              className="glass-card group relative overflow-hidden p-6 shadow-soft"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent opacity-70" />
              <motion.div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl"
                animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.8, 0.45] }}
                transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    <p className="text-sm text-slate-400">{group.level}% working confidence</p>
                  </div>
                </div>

                <div className="relative h-24 w-24 shrink-0">
                  <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
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
                  <span className="absolute inset-0 grid place-items-center text-sm font-semibold text-white">
                    {group.level}%
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">{summaries[group.title]}</p>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + index * 0.05 }}
                  className="h-2 rounded-full bg-gradient-to-r from-accent to-secondary"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.04 }}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition group-hover:border-secondary/20"
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
