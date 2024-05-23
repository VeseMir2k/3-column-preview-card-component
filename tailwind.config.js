/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      big_shoulders_display: ['Big Shoulders Display'],
      lexend_deca: ['Lexend Deca'],
    },
    colors: {
      teal: '#006971',
      dark_teal: '#004140',
      orange: '#E28625',
      grey: '#f2f2f2',
      white: '#fff',
    },
    extend: {},
  },
  plugins: [],
};
