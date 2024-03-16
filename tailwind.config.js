/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {},
    boxShadow: {
      inset: "inset 0 1px 0 0 #ffffff0d",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      work: ["Work Sans", "sans-serif"],
      caveat: ["Caveat", "cursive"],
    },
  },
  darkMode: "selector",
  plugins: [],
};
