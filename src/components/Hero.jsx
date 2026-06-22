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
import resumeFile from '../data/resume.pdf';
import profilePhoto from '../data/profile4.jpeg';
import HeroBackground from './HeroBackground';
import './Hero.css';

const codeLines = [
  'const builder = "Ayush";',
  'ship(webApps).with(cleanUX);',
  'learn("AI + scalable systems");',
];

function Hero() {
  return (
    <section id="home" className="hero-stage section-shell overflow-hidden pb-12 pt-24 xs:pt-28 sm:pb-20 sm:pt-36 lg:pt-40">
      <div className="hero-animated-bg" aria-hidden="true">
        <HeroBackground />
      </div>

      {/* Two-column on lg+, single column on mobile */}
      <div className="relative z-10 grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">

        {/* ── LEFT: Text content ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-secondary xs:text-xs xs:px-4 xs:py-2">
            <Sparkles size={12} className="xs:hidden" />
            <Sparkles size={14} className="hidden xs:block" />
            Open to software engineering opportunities
          </span>

          {/* Headline */}
          <h1 className="mt-4 text-[1.65rem] font-semibold leading-tight text-white xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Building useful web products with clean code and sharp interfaces.
          </h1>

          <p className="mt-4 text-sm font-semibold text-secondary xs:text-base sm:mt-5 sm:text-lg">{profile.name}</p>
          <p className="mt-2 text-sm leading-7 text-slate-300 xs:mt-3 xs:text-base sm:max-w-2xl">
            {profile.tagline}
          </p>

          {/* Skill tags */}
          <div className="mt-4 flex flex-wrap gap-2 xs:mt-5 xs:gap-3">
            {['React', 'Java', 'Node.js', 'MongoDB', 'MySQL'].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur xs:px-4 xs:py-1.5 xs:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col gap-3 xs:mt-7 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-indigo-500 xs:py-3 sm:w-auto sm:px-6"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-secondary/40 hover:bg-secondary/10 xs:py-3 sm:w-auto sm:px-6"
            >
              Contact Me
              <Mail size={16} />
            </a>
            <a
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-accent/40 hover:text-white xs:py-3 sm:w-auto sm:px-6"
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-6 flex flex-wrap gap-2 xs:gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 transition hover:border-accent/40 hover:text-white xs:gap-2 xs:px-4 xs:py-2 xs:text-sm"
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 transition hover:border-accent/40 hover:text-white xs:gap-2 xs:px-4 xs:py-2 xs:text-sm"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 transition hover:border-secondary/40 hover:text-white xs:gap-2 xs:px-4 xs:py-2 xs:text-sm"
            >
              <Mail size={14} />
              <span className="max-w-[180px] truncate xs:max-w-none xs:break-all">{profile.email}</span>
            </a>
          </div>
        </motion.div>

        {/* ── RIGHT: Portfolio Console Card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full"
        >
          <div className="hero-panel relative overflow-hidden border border-white/10 bg-slate-950/70 p-4 shadow-soft backdrop-blur-xl xs:p-5">
            <div className="hero-panel-shine" />
            <div className="relative">
              {/* Console header */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-secondary xs:h-10 xs:w-10 xs:rounded-2xl">
                    <Terminal size={16} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-white xs:text-sm">Portfolio Console</p>
                    <p className="text-[10px] text-slate-400 xs:text-xs">Designing, coding, learning</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-secondary/20 bg-secondary/10 px-2.5 py-1 text-[10px] font-medium text-secondary xs:px-3 xs:text-xs">
                  Available
                </span>
              </div>

              {/* Profile card */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3 xs:mt-5 xs:p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  {/* Profile image — portrait on mobile, square on sm+ */}
                  <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-glow aspect-[3/4] xs:aspect-[4/5] sm:aspect-auto sm:h-36 sm:w-36 sm:shrink-0 md:h-40 md:w-40 lg:h-36 lg:w-36 xl:h-40 xl:w-40">
                    <img
                      src={profilePhoto}
                      alt={profile.name}
                      className="hero-profile-image h-full w-full object-cover object-top sm:object-center sm:scale-[1.08]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-2 xs:p-3">
                      <p className="text-[10px] font-medium text-white xs:text-xs">{profile.education.university}</p>
                    </div>
                  </div>

                  {/* Profile info */}
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-semibold text-white xs:text-lg sm:text-xl">{profile.name}</p>
                    <p className="mt-0.5 text-xs text-slate-400 xs:text-sm">{profile.education.degree}</p>
                    <p className="mt-2 text-xs leading-6 text-slate-300 xs:mt-3 xs:text-sm xs:leading-7">
                      Full-stack builder focused on React interfaces, Java backends, and practical AI-powered workflows.
                    </p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="mt-4 grid grid-cols-3 gap-2 xs:mt-5 xs:gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-slate-950/50 p-2.5 text-center xs:rounded-2xl xs:p-3.5"
                    >
                      <p className="text-lg font-semibold text-white xs:text-xl sm:text-2xl">{stat.value}</p>
                      <p className="mt-1 text-[9px] uppercase leading-tight text-slate-400 xs:text-[10px] sm:text-xs">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code snippet */}
              <div className="mt-3 rounded-xl border border-white/10 bg-slate-950/75 p-3 font-mono text-xs text-slate-300 xs:mt-4 xs:rounded-[1.25rem] xs:p-4">
                <div className="mb-3 flex items-center gap-2 text-slate-500">
                  <Code2 size={13} />
                  <span>hero.js</span>
                </div>
                <div className="space-y-2 xs:space-y-3">
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
                      className="truncate"
                    >
                      <span className="mr-2 text-slate-600 xs:mr-3">0{index + 1}</span>
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
