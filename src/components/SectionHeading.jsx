import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
    >
      <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent xs:px-3 xs:tracking-[0.24em] xs:text-xs">
        {eyebrow}
      </span>
      <h2 className="section-title mt-4 leading-snug xs:mt-6">{title}</h2>
      <p className="section-copy">{description}</p>
    </motion.div>
  );
}

export default SectionHeading;

