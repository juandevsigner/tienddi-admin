/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        orangedeg: "#F87308",
        reddeg: "#FC6357",
        primary: "#F78419",
        yellowbg: "#EBD15B",
      },
    },
  },
  plugins: [],
};
