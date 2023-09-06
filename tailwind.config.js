/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    // fontSize: {
    //   '3xl': ['1.875rem'],
    // }
  },
  plugins: [require("daisyui")],
}

