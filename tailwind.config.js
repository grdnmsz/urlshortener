const colors = require("tailwindcss/colors");

module.exports = {

  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      emerald: colors.emerald,
      gray: colors.gray,
      teal: colors.teal,
      purple: colors.purple,
      orange: colors.orange,
      cyan: colors.cyan,
      headerColor: "#1e3b3b",
      backgroundColor: "#335355",
      inputColor: "#93c1c4"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
