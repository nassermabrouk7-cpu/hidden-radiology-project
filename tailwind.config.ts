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
        brand: {
          dark: '#0B1B2B',
          darker: '#081522',
          surface: '#10263A',
          card: '#163149',
          border: '#2A455A',
          cyan: '#00D9F5',
          'cyan-light': '#67E8F9',
          'cyan-dark': '#00AFC7',
          gold: '#F5C542',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'Noto Sans Arabic', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
