import { motion } from 'framer-motion';
import { BrainCircuit, Code2, GraduationCap, Rocket } from 'lucide-react';
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
    text: 'I continuously strengthen my understanding of Data Structures and Algorithms to write better solutions and grow as a software engineer.',
  },
];

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="About Me"
            title="A software engineering student building scalable applications and exploring intelligent solutions."
            description="I am currently pursuing an Integrated B.Tech and M.Tech in Computer Science from Central University of Jharkhand. I have a strong foundation in full stack development and have built real-world projects including appointment management systems, e-commerce platforms, and AI-powered applications using Java, React, Node.js, MySQL, and MongoDB."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="glass-card mt-8 p-6 shadow-soft"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Education</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{profile.education.degree}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{profile.education.university}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
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
