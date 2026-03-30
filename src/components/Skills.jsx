import { motion } from 'framer-motion';
import { Database, GitBranch, LayoutPanelTop, Server } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skills } from '../data/portfolio';

const icons = {
  Frontend: LayoutPanelTop,
  Backend: Server,
  Database: Database,
  Tools: GitBranch,
};

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="A balanced stack for shipping polished interfaces and dependable APIs."
        description="My toolkit covers the frontend foundations, backend development, data handling, and the collaboration tools needed to build and deliver projects with confidence."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {skills.map((group, index) => {
          const Icon = icons[group.title];

          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-secondary/30"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    <p className="text-sm text-slate-400">{group.level}% confidence</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-3 rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-3 rounded-full bg-gradient-to-r from-accent to-secondary"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
