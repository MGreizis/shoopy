/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cambridge: "#79B791",
        celadon: "#ABD1B5",
        cstmgrey: "#4E5166",
      },
    },
  },
  plugins: [],
}
