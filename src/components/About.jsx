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
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionHeading
            eyebrow="About Me"
            title="A software engineering student building digital solutions for real-world problems."
            description="I am pursuing an Integrated B.Tech and M.Tech in Computer Science at Central University of Jharkhand, specializing in Machine Learning and Data Science. My work blends full stack development, intelligent systems, and IoT-focused thinking to build practical products that people can actually use."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="glass-card mt-8 overflow-hidden p-6 shadow-soft"
          >
            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Education</p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Computer Science with an intelligent systems focus
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Academic foundation in software engineering, machine learning, and data-driven problem solving.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {educationDetails.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="glass-card relative overflow-hidden p-6 shadow-soft sm:col-span-2"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent" />
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Sparkles size={24} />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">What drives me</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  I enjoy building technology that moves beyond screens: software that improves workflows,
                  connects systems, and helps people solve practical problems with less effort.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                <Lightbulb className="text-secondary" size={28} />
                <p className="mt-4 text-sm font-medium text-white">Digital-first problem solver</p>
                <p className="mt-2 text-xs leading-6 text-slate-400">
                  Curious about automation, IoT, AI, and scalable full stack products.
                </p>
              </div>
            </div>
          </motion.article>

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: (index + 1) * 0.08 }}
                className="glass-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
