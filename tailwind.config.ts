import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
    animation: {
      'gradient-cyan-blue': 'gradient-cyan-blue 3s ease-in-out infinite', // Duração maior para mais fluidez
    },
    keyframes: {
      'gradient-cyan-blue': {
        '0%': { 'background-position': '0% 50%' },
        '25%': { 'background-position': '50% 50%' },
        '50%': { 'background-position': '100% 50%' },
        '75%': { 'background-position': '50% 50%' },
        '100%': { 'background-position': '0% 50%' },
      },
    },
    backgroundSize: {
      '200%': '200%',
    },
  },
  plugins: [],
} satisfies Config
