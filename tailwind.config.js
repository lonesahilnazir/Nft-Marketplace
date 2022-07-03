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
      yellow: "#E7B226",
      "yellow/70": "#E7B22670",
      "yellow/80": "#E7B22680",
      "yellow/83": "#E7B22683",
      cyan: "#60E7CE",
      "cyan/50": "#60E7CE50",
      "cyan/67": "#60E7CE67",
      "purple-1": "#1D1D1D",
      "space-9": "#F5FBF2",
      skin: "#E9D7A7",
      "skin/10": "#E9D7A710",
      "space-3": "#9B9E9A",
      "space-5": "#E4DEE7",
      "space-6": "#E4DEE7",
      "space-9": "#F5FBF2",
      "space-10": "#F5FBF2",
      "space-17": "#4F464E",
      "space-17/45": "#4F464E45",
    },
  },
  plugins: [],
};
