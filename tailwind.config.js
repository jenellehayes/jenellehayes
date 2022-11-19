/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008857"
      },
      fontFamily: {
        sans: ['var(--font-karla)', ...fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
