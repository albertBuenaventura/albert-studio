module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
  theme: {
    screens: {
      xs: "500px",
    },
    extend: {
      colors: {
        "primary-light": "#EEE7DE",
      },
    },
  },
};
