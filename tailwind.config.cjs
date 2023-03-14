/** @type {import('tailwindcss').Config} */
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
      },
    },
  },
  plugins: [],
};
