import {
  ArrowRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { profile, stats } from '../data/portfolio';
import resumeFile from '../data/Ayush_Dutt_Pathak_CV.pdf';
import profilePhoto from '../data/profile3.png';
import './Hero.css';

const codeLines = [
  'const builder = "Ayush";',
  'ship(webApps).with(cleanUX);',
  'learn("AI + scalable systems");',
];

function Hero() {
  return (
    <section id="home" className="hero-stage section-shell overflow-hidden pt-36 sm:pt-40">
      <div className="hero-animated-bg" aria-hidden="true">
        <span className="hero-beam hero-beam-one" />
        <span className="hero-beam hero-beam-two" />
        <span className="hero-scanline" />
      </div>

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-secondary/10 px-4 py-2 text-xs font-medium uppercase text-secondary">
            <Sparkles size={14} />
            Open to software engineering opportunities
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Building useful web products with clean code and sharp interfaces.
          </h1>
          <p className="mt-6 text-lg font-medium text-secondary">{profile.name}</p>
          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {['React', 'Java', 'Node.js', 'MongoDB', 'MySQL'].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur"
              >
                {skill}
              </span>
            ))}
          </div>

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
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
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
          <div className="hero-panel relative overflow-hidden border border-white/10 bg-slate-950/70 p-5 shadow-soft backdrop-blur-xl">
            <div className="hero-panel-shine" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-secondary">
                    <Terminal size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Portfolio Console</p>
                    <p className="text-xs text-slate-400">Designing, coding, learning</p>
                  </div>
                </div>
                <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                  Available
                </span>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="relative h-36 w-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5 shadow-glow sm:h-40 sm:w-40">
                    <img
                      src={profilePhoto}
                      alt={profile.name}
                      className="hero-profile-image h-full w-full scale-[1.12] object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-3">
                      <p className="text-xs font-medium text-white">{profile.education.university}</p>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xl font-semibold text-white">{profile.name}</p>
                    <p className="mt-1 text-sm text-slate-400">{profile.education.degree}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      Full-stack builder focused on React interfaces, Java backends, and practical AI-powered workflows.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-center"
                    >
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-2 text-xs uppercase text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-slate-950/75 p-4 font-mono text-xs text-slate-300">
                <div className="mb-4 flex items-center gap-2 text-slate-500">
                  <Code2 size={14} />
                  <span>hero.js</span>
                </div>
                <div className="space-y-3">
                  {codeLines.map((line, index) => (
                    <motion.p
                      key={line}
                      initial={{ opacity: 0.45 }}
                      animate={{ opacity: [0.45, 1, 0.45] }}
                      transition={{
                        duration: 3.2,
                        delay: index * 0.45,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <span className="mr-3 text-slate-600">0{index + 1}</span>
                      <span className="text-secondary">{line}</span>
                    </motion.p>
                  ))}
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
