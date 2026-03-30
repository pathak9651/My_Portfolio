import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
    >
      <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </span>
      <h2 className="section-title mt-6">{title}</h2>
      <p className="section-copy">{description}</p>
    </motion.div>
  );
}

export default SectionHeading;
