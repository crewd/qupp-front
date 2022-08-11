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
          1: "#3A3A3A",
          2: "#4D4D4D",
          3: "#656565",
          4: "#868686",
          5: "#B1B1B1",
        },
        system: {
          green: "#289800",
          yellow: "#F0CA00",
          red: "#C10000"
        }
      },
      fontFamily: {
        sans: ["Noto Sans KR", 'sans-serif']
      }
    },
  },
  plugins: [],
}
