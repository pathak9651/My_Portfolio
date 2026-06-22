import { motion } from 'framer-motion';
import { Download, ExternalLink, Github, Layers3, Smartphone, Sparkles } from 'lucide-react';
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
        viewport={{ once: true, amount: 0.08 }}
        transition={{ staggerChildren: 0.08 }}
        className="mt-10 grid gap-6 xs:mt-12 xs:gap-8"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={projectVariants}
            className="glass-card group relative overflow-hidden p-4 shadow-soft xs:p-6 lg:p-8"
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

            {/* Two-column on lg+: left = features, right = description */}
            <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8">

              {/* Feature list */}
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 xs:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 xs:gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/20 bg-secondary/10 px-2.5 py-1 text-[10px] font-medium text-secondary xs:px-3 xs:text-xs">
                      <Sparkles size={12} />
                      Project 0{index + 1}
                    </span>
                    {project.type === 'mobile' && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400 xs:px-3 xs:text-xs">
                        <Smartphone size={11} />
                        Mobile App
                      </span>
                    )}
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-accent xs:rounded-2xl xs:p-3">
                    {project.type === 'mobile' ? <Smartphone size={18} /> : <Layers3 size={18} />}
                  </div>
                </div>

                <div className="mt-6 space-y-2.5 xs:space-y-3">
                  {project.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: featureIndex * 0.08 }}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 xs:rounded-2xl xs:p-4"
                    >
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 xs:text-xs">
                        Feature 0{featureIndex + 1}
                      </p>
                      <p className="mt-1.5 text-xs leading-5 text-slate-200 xs:mt-2 xs:text-sm xs:leading-6">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Project description */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-accent xs:text-xs xs:tracking-[0.2em]">Case Study</p>
                <h3 className="mt-3 text-xl font-semibold text-white xs:mt-4 xs:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 xs:mt-4 xs:text-base">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="mt-4 flex flex-wrap gap-2 xs:mt-6 xs:gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-slate-300 xs:px-4 xs:py-1.5 xs:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="mt-6 flex flex-col gap-3 xs:mt-8 xs:flex-row xs:flex-wrap xs:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-accent/40 hover:text-white xs:w-auto xs:px-5 xs:py-3"
                  >
                    <Github size={15} />
                    Source Code
                  </a>
                  {project.apk ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-emerald-500 xs:w-auto xs:px-5 xs:py-3"
                    >
                      <Download size={15} />
                      Download APK
                    </a>
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-indigo-500 xs:w-auto xs:px-5 xs:py-3"
                    >
                      View Live
                      <ExternalLink size={15} />
                    </a>
                  )}
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
