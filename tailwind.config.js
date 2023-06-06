/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      'dark-bg': '#2C394B',
      'primary': '#F0582C'
    }
  },
  plugins: [],
}