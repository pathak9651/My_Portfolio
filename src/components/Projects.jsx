import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers3, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolio';

const projectVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected builds with practical use cases, clean interfaces, and working product flow."
        description="These projects show how I approach real-world software: understand the problem, design a focused experience, connect the right stack, and ship something usable."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{ staggerChildren: 0.08 }}
        className="mt-12 grid gap-8"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={projectVariants}
            className="glass-card group relative overflow-hidden p-6 shadow-soft lg:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent" />
            <motion.div
              aria-hidden="true"
              animate={{ x: ['-20%', '110%'], opacity: [0, 0.55, 0] }}
              transition={{
                duration: 5.5 + index * 0.25,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.4,
              }}
              className="absolute top-0 h-full w-1/3 rotate-12 bg-white/5 blur-2xl"
            />

            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                    <Sparkles size={14} />
                    Project 0{index + 1}
                  </span>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-accent">
                    <Layers3 size={20} />
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {project.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: featureIndex * 0.08 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Feature 0{featureIndex + 1}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-200">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accent">Case Study</p>
                <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.12em] text-slate-300 sm:tracking-[0.16em]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-accent/40 hover:text-white"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-indigo-500"
                  >
                    View Live
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
