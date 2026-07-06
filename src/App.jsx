import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroBackground from './components/HeroBackground';
import { socials } from './data/portfolio';

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('portfolio-theme');

    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`theme-shell theme-${theme} relative flex flex-col overflow-x-hidden bg-background text-text`}>
      {/* Global Background Canvas */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <HeroBackground />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:38px_38px] opacity-[0.08]" />
      <motion.div
        animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[-4rem] top-20 hidden h-56 w-56 rounded-full bg-accent/20 blur-3xl sm:block sm:h-72 sm:w-72"
      />
      <motion.div
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-20 right-[-3rem] hidden h-56 w-56 rounded-full bg-secondary/20 blur-3xl sm:block sm:h-72 sm:w-72"
      />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10 flex-1">
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
