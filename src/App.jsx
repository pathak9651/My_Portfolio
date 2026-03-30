import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { socials } from './data/portfolio';

function App() {
  return (
    <div className="relative overflow-x-hidden bg-background text-text">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:38px_38px] opacity-[0.08]" />
      <motion.div
        animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[-6rem] top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-20 right-[-4rem] h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact socials={socials} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
