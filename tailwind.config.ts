import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B14',
        'ink-panel': '#14131F',
        'ink-line': 'rgba(255,255,255,0.09)',
        'grad-start': '#A855F7',
        'grad-mid': '#EC4899',
        'grad-end': '#F5A96E',
        accent: '#22D3EE',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #A855F7 0%, #EC4899 55%, #F5A96E 100%)',
      },
      fontFamily: {
        display: ['Anton', 'ui-sans-serif', 'sans-serif'],
        brand: ['Baloo 2 Variable', 'ui-sans-serif', 'sans-serif'],
        sans: ['Inter Variable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
