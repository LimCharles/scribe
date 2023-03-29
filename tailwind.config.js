const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A053E",
        secondary: "#0a205a",
        highlight: "#123082",
        page: "#321917",
        hover: "#F5E9DB",
      },
      fontFamily: {
        cairo: ["Cairo Play", "Display"],
        quicksand: ["Quicksand", "Display"],
        inter: ["Inter", "Display"],
      },
    },
  },
  plugins: [],
};
