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
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect for projects, internships, and software opportunities."
            description="This form now sends submissions directly to your inbox through Web3Forms once your access key is configured."
          />

          <div className="mt-8 flex flex-wrap gap-4">
            {socials.map((social) => {
              const Icon = socialIcons[social.label];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:border-accent/40 hover:text-white"
                >
                  <Icon size={18} />
                  {social.label}
                </a>
              );
            })}
          </div>

          <div className="mt-6 glass-card p-5">
            <p className="text-sm font-medium text-white">Primary Email</p>
            <p className="mt-2 text-sm text-slate-300">{profile.email}</p>
            <p className="mt-4 text-sm font-medium text-white">Secondary Email</p>
            <p className="mt-2 text-sm text-slate-300">{profile.secondaryEmail}</p>
            <p className="mt-4 text-sm font-medium text-white">Phone</p>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="mt-2 inline-block text-sm text-slate-300 transition hover:text-white"
            >
              {profile.phone}
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="glass-card space-y-5 p-6 shadow-soft"
        >
          <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({ ...current, message: event.target.value }))
              }
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50"
              placeholder="Tell me about your project or idea..."
              required
            />
          </div>

          {status.message && (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'border-secondary/30 bg-secondary/10 text-secondary'
                  : status.type === 'error'
                    ? 'border-rose-500/30 bg-rose-500/10 text-rose-300'
                    : 'border-accent/30 bg-accent/10 text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2">
                {status.type === 'success' && <CheckCircle2 size={16} />}
                <span>{status.message}</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;

