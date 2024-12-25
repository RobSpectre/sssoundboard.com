/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        green: '#6ed670',
        blue: '#00b1e1',
        orange: '#ce2d11',
        yellow: '#fec20b',
        darkgray: '#12131c',
        gray: '#414141',
        red: '#1f0202A'
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
