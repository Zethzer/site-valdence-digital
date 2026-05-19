import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f7f6',
        foreground: '#111827',
        muted: '#6b7280',
        teal: {
          DEFAULT: '#0d9488',
          dark: '#0f2a27',
        },
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
