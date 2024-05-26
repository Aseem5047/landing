/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#03a9f4f0",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "bg-img-1": "url('/src/assets/img-1.png')",
        "bg-img-2": "url('/src/assets/img-2.png')",
        "feature-bg": "url('/src/assets/feature-bg.png')",
        pattern: "url('/src/assets/pattern.png')",
        "pattern-2": "url('/src/assets/pattern-bg.png')",
      },
    },
  },
  plugins: [],
};