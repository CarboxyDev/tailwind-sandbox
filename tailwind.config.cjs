/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0faff",
          100: "#e1f4fd",
          200: "#bce9fb",
          300: "#81daf8",
          400: "#3ec7f2",
          500: "#15b4e7",
          600: "#088fc1",
          700: "#08729c",
          800: "#0b6081",
          900: "#0f4f6b",
          DEFAULT: "#15b4e7",
        },
        secondary: {
          50: "#fef5ee",
          100: "#fde9d7",
          200: "#fbcfad",
          300: "#f8ad79",
          400: "#f48143",
          500: "#f0601f",
          600: "#e74815",
          700: "#bb3313",
          800: "#952a17",
          900: "#782516",
          DEFAULT: "#e74815",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        inter: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        15: "60px",
        17: "68px",
        18: "72px",
        19: "76px",
        22: "88px",
        25: "100px",
        26: "104px",
        30: "120px",
        50: "200px",
        70: "280px",
        84: "336px",
        88: "352px",
        90: "360px",
        100: "400px",
        104: "416px",
        108: "432px",
        112: "448px",
        116: "464px",
        120: "480px",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
