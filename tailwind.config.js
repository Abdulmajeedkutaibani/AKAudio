module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '0.92px',
      tight: '1.142px',
      normal: '1.42px',
      wide: '1.7px',
      wider: '2px',
      widest: '10px',
    },
    fontSize: {
      xxxs: '13px',
      xxs: '14px',
      xs: '15px',
      small: '18px',
      medium: '24px',
      larg: '28px',
      xl: '32px',
      xxl: '40px',
      xxxl: '58px',
    },
    colors: {
      orangy: '#D87D4A',
      orangelight: '#FBAF85',
      dark: '#101010',
      blackmain: '#0E0E0E',
      blacky: '#000000',
      whity: '#FFFFFF',
      greyish: '#F1F1F1',
      milky: '#FAFAFA',
      grey: '#808080',
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {
      // backgroundImage: (theme) => ({
      //   'hero-image': "url('./src/photoes/image-hero.jpg')",
      //   'footer-texture': "url('/img/footer-texture.png')",
      // }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
