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
        primary: '#eb966a',
        accent: {
          blue: '#65b0f6',
          orange: '#ffb572',
          red: '#ff7ca3',
          green: '#50d1aa',
          purple: '#9290fe'
        }
      },
      boxShadow: {
        primary: '0px 8px 24px rgba(234, 124, 105, 0.32)',
        'inverse-top': '4px 4px 0 #252836',
        'inverse-bottom': '4px -4px 0 #252836'
      }
    },
  },
  plugins: [],
};
