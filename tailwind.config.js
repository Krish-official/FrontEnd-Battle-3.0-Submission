/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'arctic': '#F1F6F4',
        'forsythia': '#FFC801',
        'nocturnal': '#114C5A',
        'mystic': '#D9E8E2',
        'saffron': '#FF9932',
        'oceanic': '#172B36',
      },
      fontFamily: {
        heading: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};