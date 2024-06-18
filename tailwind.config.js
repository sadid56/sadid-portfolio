/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#03e9f4"
      },
      fontFamily:{
        italic:["Playwrite DE Grund", "cursive"],
        Georgian:["Noto Sans Georgian", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}