import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '../data/portfolio';

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  Phone: Phone,
};

const initialForm = {
  name: '',
  email: '',
  message: '',
};

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function Contact({ socials }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!accessKey) {
      setStatus({
        type: 'error',
        message:
          'Contact form is not configured yet. Add your Web3Forms access key to the Vite environment file.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Sending your message...' });

    try {
      const payload = {
        access_key: accessKey,
        name: form.name,
        email: form.email,
        message: form.message,
        subject: `Portfolio message from ${form.name}`,
        from_name: 'Ayush Dutt Pathak Portfolio',
        replyto: form.email,
        botcheck: '',
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully. I will get back to you soon.',
        });
        setForm(initialForm);
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong while sending the message.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Unable to send the message right now. Please try again in a moment.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell">
      {/* Two-column on lg+, stacked on mobile */}
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

        {/* ── LEFT: Info ── */}
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect for projects, internships, and software opportunities."
            description="This form sends submissions directly to your inbox through Web3Forms once your access key is configured."
          />

          {/* Social links — column on mobile, wrap on xs+ */}
          <div className="mt-6 flex flex-col gap-2.5 xs:mt-8 xs:flex-row xs:flex-wrap xs:gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.label];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition hover:border-accent/40 hover:text-white xs:rounded-2xl"
                >
                  <Icon size={16} />
                  {social.label}
                </a>
              );
            })}
          </div>

          {/* Contact info card */}
          <div className="glass-card mt-5 p-4 xs:mt-6 xs:p-5">
            <p className="text-sm font-medium text-white">Primary Email</p>
            <p className="mt-1.5 break-all text-xs text-slate-300 xs:text-sm">{profile.email}</p>
            <p className="mt-4 text-sm font-medium text-white">Secondary Email</p>
            <p className="mt-1.5 break-all text-xs text-slate-300 xs:text-sm">{profile.secondaryEmail}</p>
            <p className="mt-4 text-sm font-medium text-white">Phone</p>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="mt-1.5 inline-block text-xs text-slate-300 transition hover:text-white xs:text-sm"
            >
              {profile.phone}
            </a>
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <form
          onSubmit={handleSubmit}
          className="glass-card space-y-4 p-4 shadow-soft xs:space-y-5 xs:p-6"
        >
          <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs text-slate-300 xs:mb-2 xs:text-sm">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-sm text-white outline-none transition focus:border-accent/50 xs:rounded-2xl xs:px-4 xs:py-3"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs text-slate-300 xs:mb-2 xs:text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-sm text-white outline-none transition focus:border-accent/50 xs:rounded-2xl xs:px-4 xs:py-3"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs text-slate-300 xs:mb-2 xs:text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({ ...current, message: event.target.value }))
              }
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-sm text-white outline-none transition focus:border-accent/50 xs:rounded-2xl xs:px-4 xs:py-3"
              placeholder="Tell me about your project or idea..."
              required
            />
          </div>

          {status.message && (
            <div
              className={`rounded-xl border px-3 py-2.5 text-xs xs:rounded-2xl xs:px-4 xs:py-3 xs:text-sm ${
                status.type === 'success'
                  ? 'border-secondary/30 bg-secondary/10 text-secondary'
                  : status.type === 'error'
                    ? 'border-rose-500/30 bg-rose-500/10 text-rose-300'
                    : 'border-accent/30 bg-accent/10 text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2">
                {status.type === 'success' && <CheckCircle2 size={15} />}
                <span>{status.message}</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-70 xs:py-3 sm:w-auto sm:px-6"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send size={15} />
          </button>
          </form>
      </div>
    </section>
  );
}

export default Contact;
