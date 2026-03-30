import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolio';

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Real-world projects across web platforms, mobile integration, and AI workflows."
        description="These projects reflect my work in full stack development, system design, user-focused interfaces, and intelligent application building."
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group glass-card overflow-hidden p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/30"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-accent transition group-hover:bg-accent/10">
                <ArrowUpRight size={20} />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {project.features.map((feature) => (
                <p key={feature} className="text-sm text-slate-300">
                  • {feature}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/40 hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
