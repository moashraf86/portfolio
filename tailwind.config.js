/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      transitionDuration: {
        250: "250ms",
        350: "350ms",
        400: "400ms",
        450: "450ms",
        550: "550ms",
        600: "600ms",
        650: "650ms",
        750: "750ms",
        800: "800ms",
        850: "850ms",
        900: "900ms",
        950: "950ms",
      },
    },
    boxShadow: {
      card: "rgba(0, 0, 0, 0.05) 0px 2px 10px 0px",
      cover:
        "rgba(0, 0, 0, 0.03) -7px -5px 16px 0px, rgba(0, 0, 0, 0.03) 0px 17px 11px 0px",
    },
    dropShadow: {
      icon: "0 5px 15px rgba(0, 0, 0, 0.1)",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  darkMode: "selector",
  plugins: [require("tailwindcss-animate")],
};
