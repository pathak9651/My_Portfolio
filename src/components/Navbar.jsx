import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../data/portfolio';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/75 px-5 py-4 shadow-soft backdrop-blur-xl">
        <a href="#home" className="text-lg font-semibold tracking-[0.18em] text-white">
          MYPORTFOLIO
        </a>

        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-accent/50 hover:text-white md:hidden"
          onClick={() => setOpen((state) => !state)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden items-center gap-7 md:flex">
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
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-card/90 p-4 shadow-soft backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}

export default Navbar;
