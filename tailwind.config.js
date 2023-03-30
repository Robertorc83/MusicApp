/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-red": "#662323",
        "main": "#E86060",
        "secondary": "#EB5757"
      },
      fontFamily: {
        main: ['Quicksand', 'sans-serif'],
      },
      aspectRatio: {
        'custom': '0.75', // 3:4 aspect ratio
      },
      screens: {
      '2xs': '320px',
      'xs': '475px',
    },
    },
  },
  plugins: [],
}