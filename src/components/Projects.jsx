import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Layers3, Smartphone, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolio';

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected builds with practical use cases, clean interfaces, and working product flow."
        description="These projects show how I approach real-world software: understand the problem, design a focused experience, connect the right stack, and ship something usable."
      />

      <div className="mt-10 grid gap-5 xs:mt-12 sm:grid-cols-2 sm:gap-6 xl:gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.4, delay: Math.min(index % 2, 1) * 0.08 }}
            className="glass-card group relative flex h-full flex-col overflow-hidden p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 xs:p-6 lg:p-7"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent opacity-80 transition-opacity group-hover:opacity-100" />
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                <Sparkles size={12} /> Project {String(index + 1).padStart(2, '0')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                {project.type === 'mobile' ? <Smartphone size={13} /> : <Layers3 size={13} />}
                {project.type === 'mobile' ? 'Mobile app' : 'Web project'}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Featured build</p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight text-white xs:text-3xl">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4 xs:p-5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Highlights</h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-xs leading-5 text-slate-300 xs:text-sm xs:leading-6">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 xs:flex-row">
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-accent/40 hover:text-white">
                <Github size={15} /> Source Code
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 ${project.apk ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-accent hover:bg-indigo-500'}`}>
                {project.apk ? <Download size={15} /> : null}
                {project.apk ? 'Download APK' : 'View Live'}
                {!project.apk ? <ArrowUpRight size={16} /> : null}
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
