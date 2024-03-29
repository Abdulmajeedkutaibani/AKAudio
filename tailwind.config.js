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
    spacing: {
      '45%': '45%',
      '90%': '90%',
      '50%': '50%',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '560px',
      xxl: '600px',
      xxxl: '720px',
      '20px': '20px',
      0: '0',
      0.5: '4px',
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      18: '72px',
      20: '80px',
      22: '89px',
      24: '96px',
      28: '112px',
      30: '120px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      85: '365px',
      96: '384px',
    },
    letterSpacing: {
      tightestx: '-0.214px',
      tightest: '-.075em',
      tighter: '1px',
      tight: '1.2px',
      normal: '1.42px',
      wide: '1.7px',
      wider: '2px',
      widest: '10px',
    },
    fontSize: {
      xxxxs: '12px',
      xxxs: '13px',
      xxs: '14px',
      xs: '15px',
      small: '18px',
      medium: '24px',
      larg: '28px',
      xl: '32px',
      xxl: '40px',
      xxxl: '58px',
      36: '36px',
    },
    colors: {
      heroBlack: '#191919',
      orangy: '#D87D4A',
      orangelight: '#FBAF85',
      dark: '#101010',
      blackmain: '#0E0E0E',
      blacky: '#000000',
      blackyhover: '#4C4C4C',
      whity: '#FFFFFF',
      greyish: '#F1F1F1',
      milky: '#FAFAFA',
      grey: '#808080',
      formBorder: '#cfcfcf',
      error: '#CD2C2C',
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },

    extend: {
      // backgroundImage: (theme) => ({
      //   circles: "url('./src/photoes/home/desktop/pattern-circles.svg')",
      // })
      inset: {
        0: '0',
        '1/5': '20%',
        '1/6': '15%',
        '1/7': '10%',
        '1/8': '5%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
