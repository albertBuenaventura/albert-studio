const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
  theme: {
    screens: {
      xs: "500px",
      xmd: "900px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary-light": "#EEE7DE",
      },
    },
  },
};
