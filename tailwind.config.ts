import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F9F9F9',
        'deep-black': '#0A0A0A',
        'accent': '#1a1a1a',
      },
      fontFamily: {
        serif: ['var(--font-noto-serif-jp)', 'serif'],
        sans: ['var(--font-zen-kaku)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
