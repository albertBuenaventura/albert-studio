const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
  theme: {
    screens: {
      xs: "550px",
      xmd: "940px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary-light": "#EEE7DE",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      circular: ['"Poppins"'],
    },
  },
};
