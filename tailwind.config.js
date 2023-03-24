const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo Play", "Display"],
        quicksand: ["Quicksand", "Display"],
        inter: ["Inter", "Display"],
      },
    },
  },
  plugins: [],
};
