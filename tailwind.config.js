/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant files in your project
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   customBg: "url('/images/bgImage.jpg')", // Directly reference the image path as a string
      // },
      colors: {
        myBlack: "#03001C",
        myBlue: "#03001C",
        myCyan: "#37B7C3",
        myWhite: "#DDE6ED",
        myTeal: "#135D66",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
