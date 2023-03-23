/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // lg: { max: "1800px" },
        // md: { max: "990px" },
        // sm: { max: "600px" },
        // xs: { max: "400px" },
        // minmd: "1700px",
        // minlg: "2100px",
      },
    },
  },
  plugins: [],
};

module.exports = config;
