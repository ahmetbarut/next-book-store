/** @type {import('tailwindcss').Config} */
const defaultTheme  = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#393280",
          50: '#f2f2ff',
          100: '#e0e0ff',
          200: '#393280',
          300: '#8080ff',
          400: '#6666ff',
          500: '#ED553B',
          600: '#3932cc',
          700: '#2d2b8f',
          800: '#38426C',
          900: '#393280',

        },
      },
    },
    fontFamily: {
      inter: [
        "'Inter', sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
  },
  plugins: [],
}