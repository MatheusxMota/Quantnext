import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'quant-dark': '#1A1A1A',
        'quant-green': '#00B33C',
        'quant-blue': '#007BFF',
        'quant-text-primary': '#FFFFFF',
        'quant-text-secondary': '#B0B0B0',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-background.jpg')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;