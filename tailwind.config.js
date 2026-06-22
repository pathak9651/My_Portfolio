/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        background: '#07111f',
        card: '#13243a',
        text: '#eef6ff',
        accent: '#4f46e5',
        secondary: '#14b8a6',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(79, 70, 229, 0.34), 0 0 34px rgba(20, 184, 166, 0.22)',
        soft: '0 24px 70px rgba(0, 0, 0, 0.38)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(125, 211, 252, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(125, 211, 252, 0.1) 1px, transparent 1px)',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
