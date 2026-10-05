import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FB6514',
          orangeLight: '#FD853A',
          dark: '#171717',
          surface: '#272727',
          lightGray: '#F2F4F7',
          textMain: '#10110E',
          textMuted: '#667085',
          borderLight: '#E4E7EC',
        },
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '50px',
      },
      fontFamily: {
        sans: ['var(--font-urbanist)', 'var(--font-jakarta)', 'sans-serif'],
        display: ['var(--font-urbanist)', 'sans-serif'],
        urbanist: ['var(--font-urbanist)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        card: '0 10px 30px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
