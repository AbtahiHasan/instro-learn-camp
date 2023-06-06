/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {
      colors: {
        'dark-bg': '#2C394B',
        'main': '#F0582C'
      }
    },
   
  },
  plugins: [require("daisyui")],
}