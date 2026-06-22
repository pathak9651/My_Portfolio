import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolio';

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 24) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY.current) {
        setHidden(true);
        setOpen(false);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 px-2 pt-2 xs:px-3 xs:pt-3 sm:px-4 sm:pt-4 lg:px-6"
    >
      <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-2 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 shadow-soft backdrop-blur-xl xs:rounded-2xl xs:px-4 xs:py-3 sm:px-5 sm:py-3.5 lg:px-6">
        {/* Logo / Name */}
        <a
          href="#home"
          className="min-w-0 flex-1 truncate text-[11px] font-bold tracking-[0.06em] text-white xs:text-xs sm:text-sm sm:tracking-[0.1em] md:flex-none md:text-base md:tracking-[0.16em] lg:text-lg lg:tracking-[0.18em]"
        >
          AYUSH DUTT PATHAK
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-3 md:flex lg:gap-5">
          <div className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 transition hover:border-accent/50 hover:text-white lg:gap-2 lg:px-4 lg:py-2"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            <span className="hidden lg:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-white/10 bg-white/5 p-1.5 text-slate-200 transition hover:border-accent/50 hover:text-white xs:p-2"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            className="rounded-full border border-white/10 bg-white/5 p-1.5 text-slate-200 transition hover:border-accent/50 hover:text-white xs:p-2"
            onClick={() => setOpen((state) => !state)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && !hidden && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 w-full max-w-[1600px] rounded-xl border border-white/10 bg-slate-950/95 p-3 shadow-soft backdrop-blur-xl md:hidden xs:rounded-2xl xs:p-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
