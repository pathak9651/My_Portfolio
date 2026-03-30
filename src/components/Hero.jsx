import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile, stats } from '../data/portfolio';

function Hero() {
  return (
    <section id="home" className="section-shell pt-36 sm:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            {profile.title}
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-indigo-500"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-secondary/40 hover:bg-secondary/10"
            >
              Contact Me
              <Mail size={18} />
            </a>
            <a
              href={profile.resume}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-accent/40 hover:text-white"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-accent/40 hover:text-white"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-accent/40 hover:text-white"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-secondary/40 hover:text-white"
            >
              <Mail size={16} />
              {profile.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-secondary/30 blur-3xl" />

          <div className="glass-card relative overflow-hidden p-8 shadow-soft">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-rose-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-secondary" />
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-secondary text-2xl font-bold text-white shadow-glow">
                    {profile.initials}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{profile.name}</p>
                    <p className="text-sm text-slate-400">Software Engineering Student and Full Stack Builder</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                    >
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-background/70 p-4">
                  <p className="text-sm leading-7 text-slate-300">
                    Strong foundation in Java-based backend systems, React-driven user interfaces, and intelligent applications backed by problem-solving and continuous learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
