/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        regular: "16px",
        max: "40px",
        xxl: "34px",
        xl: "26px",
        lg: "24px",
        md: "20px",
        sm: "12px",
        xs: "10px",
      },
      colors: {
        primary: "#6096FD",
        secondary: {
          sBlue: "#031B88",
          sPurple: "#AAB6FB"
        },
        gray: {
          100: "#3A3A3A",
          200: "#4D4D4D",
          300: "#656565",
          400: "#868686",
          500: "#B1B1B1",
        },
        system: {
          green: "#289800",
          yellow: "#F0CA00",
          red: "#C10000"
        }

      },
    },
  },
  plugins: [],
}
