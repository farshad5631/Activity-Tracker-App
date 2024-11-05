/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      customGray: "#e1e1e1",
      customBlue: "#4660f1",
      secondaryGray: "#e4e4e6",
      white: "#ffffff",
      customBlack: "#1a1a24",
      customGrayLight: "#1e212a",
      customGrayDrak: "#181b24",
      customRed: "#e80202",
      customGreen: "#22e26d",
    },
    extend: {
      fontFamily: {
        primaryRegular: ["Regular"],
        primaryBold: ["Bold"],
      },
    },
  },
  plugins: [],
};
