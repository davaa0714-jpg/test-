/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
 // plugins: [
  //  require("tw-animate-css") // tw-animate-css ашиглахад
  //],
  darkMode: "class", // .dark class-аар dark theme
}
