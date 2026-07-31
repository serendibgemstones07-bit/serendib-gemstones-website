import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#c9a84c',
          light: '#e0bc6e',
          dark: '#a88835',
        },
        purple: {
          DEFAULT: '#6b2d8b',
          mid: '#9b5dc8',
          dark: '#4a1d61',
        },
        dark: {
          DEFAULT: '#0f1c2e',
          purple: '#1a2d4a',
          card: '#152338',
        },
        offwhite: '#f8f6f2',
        warm: '#ede8e0',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        jost: ['var(--font-jost)', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'float-up': 'floatUp 12s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatUp: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.15' },
          '90%': { opacity: '0.12' },
          '100%': { transform: 'translateY(-20vh) rotate(45deg)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gem-gradient': 'linear-gradient(135deg, #c9a84c 0%, #6b2d8b 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0f1c2e 0%, #1a2d4a 100%)',
      },
    },
  },
  plugins: [],
}
export default config
