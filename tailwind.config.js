/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ['Atkinson Hyperlegible', 'sans-serif'],
        custom2: ['Archivo Narrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}