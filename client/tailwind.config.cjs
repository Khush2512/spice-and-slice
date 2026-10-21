/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#121212',          // Deep solid charcoal background
          surface: '#18181b',       // Clean matte card surface
          elevated: '#202024',      // Elevated surface
          muted: '#27272a',         // Muted elements
          border: '#2e2e34',        // Clean subtle border
          borderSubtle: '#26262b',  // Subtle divider
          tandoori: '#EA580C',      // Warm tandoori burnt-orange accent
          tandooriHover: '#C2410C', // Darker burnt orange for hover
          gold: '#D97706',          // Warm golden spice tone
          goldLight: '#F59E0B',
          textMain: '#F5F5F5',      // Crisp off-white
          textMuted: '#9CA3AF',     // Soft grey secondary text
          textDim: '#71717A',       // Dim helper text
          green: '#10B981',
          danger: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        'card': '0 2px 8px 0 rgba(0, 0, 0, 0.35)',
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
