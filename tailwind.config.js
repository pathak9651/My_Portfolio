/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        card: '#1e293b',
        text: '#e2e8f0',
        accent: '#6366f1',
        secondary: '#22c55e',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(99, 102, 241, 0.25), 0 0 30px rgba(99, 102, 241, 0.15)',
        soft: '0 20px 60px rgba(15, 23, 42, 0.45)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
