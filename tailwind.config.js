/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white_base': '#FFFFFF',
      'black_base': '#262626',

      // Light mode
      'gray_light': '#D9D9D9',
      'orange_light': '#FF9A3D',
      'blue_light': '#42A4FF',

      //Dark mode
      'gray_dark': '#858181',
      'orange_dark': '#C16F23',
      'blue_dark': '#2567A3'
    },


    extend: {},
  },
  plugins: [],
}
