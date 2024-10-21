/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"Yeseva One"', 'serif'],
        'secondary': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'h1': '40px',
        'h2': '30px',
        'h3': '20px',
        'text': '18px',
        'links': '12px',
      },
      fontWeight: {
        'thin': 100,
        'extralight': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      colors: {
        'main-text': '#171517',
        'light-bg': '#F8EBF8',
        'medium-bg': '#EEE4F0',
        'dark-bg': '#524D5F',
        'warm-purple': '#795690',
        'indigo': '#465CA5',
        'light-neutral-purple': '#BDBEDC',
        'dark-purple': '#211F35',
        'medium-purple': '#66569F',
      },
      boxShadow: {
        glow: '0 0 15px 5px rgba(255, 255, 255, 0.6)', // Change the color and intensity to match the glow effect
      },
      transitionProperty: {
        'shadow': 'box-shadow',
      },
      backgroundImage: {
        'late-sunset': "url('src/assets/late_sunset_silhouette.jpg')",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.font-h1': {
        fontFamily: '"Yeseva One", serif', // Directly use the font-family
        fontSize: '40px',
        fontWeight: '400',
      },
      '.font-h2': {
        fontFamily: '"Yeseva One", serif',
        fontSize: '30px',
        fontWeight: '400',
      },
      '.font-h3': {
        fontFamily: '"Yeseva One", serif',
        fontSize: '20px',
        fontWeight: '400',
      },
      '.font-text': {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '18px',
        fontWeight: '300',
      },
      '.font-links': {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '12px',
        fontWeight: '300',
      },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}