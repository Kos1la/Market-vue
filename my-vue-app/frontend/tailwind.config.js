/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#038C7F",
        secondary: "#F2C641",
        tertiary: {
          dark: "#F27405",
          light: "#F2C641",
        },
      },
    },
  },
  plugins: [],
};
