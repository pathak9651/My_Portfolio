import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Code2,
  Cpu,
  GraduationCap,
  Lightbulb,
  Rocket,
  Sparkles,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '../data/portfolio';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    text: 'I specialize in building scalable web applications using Java-based backend systems and modern JavaScript frameworks such as React and Node.js.',
  },
  {
    icon: BrainCircuit,
    title: 'Intelligent Systems',
    text: 'I actively explore machine learning and AI-powered workflows to build useful software that combines automation with practical product thinking.',
  },
  {
    icon: Rocket,
    title: 'Problem Solving',
    text: 'I am passionate about solving real-life problems digitally, turning everyday friction into simple, useful software experiences.',
  },
  {
    icon: Cpu,
    title: 'IoT Integrations',
    text: 'I am interested in IoT systems and have worked on IoT device integrations during my internships, connecting hardware workflows with practical software.',
  },
];

const educationDetails = [
  { label: 'Degree', value: profile.education.degree },
  { label: 'Specialization', value: profile.education.specialization },
  { label: 'University', value: profile.education.university },
];

function About() {
  return (
    <section id="about" className="section-shell">
      {/* Two-column on lg+: left = education card, right = highlight grid */}
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-14">

        {/* ── LEFT COLUMN ── */}
        <div>
          <SectionHeading
            eyebrow="About Me"
            title="A software engineering student building digital solutions for real-world problems."
            description="I am pursuing an Integrated B.Tech and M.Tech in Computer Science at Central University of Jharkhand, specializing in Machine Learning and Data Science."
          />

          <div className="glass-card mt-6 overflow-hidden p-4 shadow-soft xs:mt-8 xs:p-6">
            <div className="flex items-start gap-3 border-b border-white/10 pb-5 xs:gap-4 xs:pb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary xs:h-12 xs:w-12 xs:rounded-2xl">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Education</p>
                <h3 className="mt-1.5 text-base font-semibold text-white xs:mt-2 xs:text-xl">
                  Computer Science with an intelligent systems focus
                </h3>
                <p className="mt-1.5 text-xs leading-6 text-slate-300 xs:mt-2 xs:text-sm xs:leading-7">
                  Academic foundation in software engineering, machine learning, and data-driven problem solving.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {educationDetails.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 xs:rounded-2xl xs:p-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 xs:text-xs">{item.label}</p>
                  <p className="mt-1.5 text-xs font-medium leading-6 text-white xs:mt-2 xs:text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {/* "What drives me" featured card — full width */}
          <article className="glass-card relative overflow-hidden p-5 shadow-soft sm:col-span-2 xs:p-6">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent" />
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent xs:h-12 xs:w-12 xs:rounded-2xl">
                  <Sparkles size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white xs:text-2xl">What drives me</h3>
                <p className="mt-2.5 text-sm leading-7 text-slate-300 xs:mt-3 md:max-w-xl">
                  I enjoy building technology that moves move beyond screens: software that improves workflows,
                  connects systems, and helps people solve practical problems with less effort.
                </p>
              </div>
              <div className="shrink-0 rounded-xl border border-white/10 bg-slate-950/50 p-4 xs:rounded-2xl xs:p-5 md:min-w-[180px]">
                <Lightbulb className="text-secondary" size={26} />
                <p className="mt-3 text-sm font-medium text-white">Digital-first problem solver</p>
                <p className="mt-1.5 text-xs leading-6 text-slate-400">
                  Curious about automation, IoT, AI, and scalable full stack products.
                </p>
              </div>
            </div>
          </article>

          {/* Four highlight cards */}
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="glass-card p-4 shadow-soft transition hover:-translate-y-1 hover:border-accent/30 xs:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent xs:h-12 xs:w-12 xs:rounded-2xl">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white xs:text-xl">{item.title}</h3>
                <p className="mt-2.5 text-xs leading-6 text-slate-300 xs:text-sm xs:leading-7">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
