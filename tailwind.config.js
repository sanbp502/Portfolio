/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#031926',
        secondary: '#A0D2EB',
        tertiary: '#E5EAF5',
      }
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer'),],
}
