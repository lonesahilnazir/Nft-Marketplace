/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // src/common/components
    "src/common/components/**/*.{js,jsx,ts,tsx}",
    // src/modules
    "src/modules/**/*.{js,jsx,ts,tsx}",
    // src/pages
    "src/pages/**/*.{js,jsx,ts,tsx}",
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
