module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        maroon: "#45192F",
      },
    },
  },
};
