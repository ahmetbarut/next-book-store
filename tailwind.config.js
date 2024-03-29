/** @type {import('tailwindcss').Config} */
const defaultTheme  = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")
const colors = require('tailwindcss/colors')
const {nextui} = require("@nextui-org/react");

module.exports = {
  darkMode: 'class',
  coffeeMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./page/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    // Or if using `src` directory:
  ],
  theme: {
    coffeeMode: {
      colors: {
        ...colors,
      },
      backgroundColors: {
        ...colors,
      }
    },
    themeVariants : ['coffee', 'user'],
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
  plugins: [
    nextui(),
    plugin(function({ addVariant }) {
      addVariant('coffee', function({ container, separator }) {
        container.walkRules(rule => {
          rule.selector = `.coffee * ${rule.selector}`
        })
      }
    )
    })
  ],
}