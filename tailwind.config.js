/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "colomns-1",
    "sm:columns-2",
    "md:columns-2",
    "lg:columns-2",
    "sm:columns-3",
    "md:columns-3",
    "lg:columns-3",
    "sm:columns-4",
    "md:columns-4",
    "lg:columns-4",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      colors: {
        programmers: {
          "lv.0": "#4387F7",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
