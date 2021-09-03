module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orangy: '#D87D4A',
      orangelight: '#FBAF85',
      dark: '#101010',
      blacky: '#000000',
      whity: '#FFFFFF',
      greyish: '#F1F1F1',
      milky: '#FAFAFA',
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
