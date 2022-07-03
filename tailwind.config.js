/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      oxanium: ["Oxanium", "sans-serif"],
      workSans: ["Work Sans", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      primary: "#FFCE4E",
    },
  },
  plugins: [],
};
