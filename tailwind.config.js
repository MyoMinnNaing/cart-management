/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Bai Jamjuree", "Padauk", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Montserrat"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
