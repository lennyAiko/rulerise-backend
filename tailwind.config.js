module.exports = {
  content: ['./views/**/*.ejs', './assets/js/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F26659',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        euclid: ['Euclid Circular A', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
