module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#e0e6e9",
          500: "#abbbc2",
          700: "#393c49",
          800: "#252836",
          900: "#1f1d2b",
        },
        primary: '#eb966a'
      },
    },
  },
  plugins: [],
};
