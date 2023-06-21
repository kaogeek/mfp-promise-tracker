module.exports = {
  purge: {
    content: ['./tailwind.safelist.txt'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1px': '1px',
      },
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#BBBBBB',
      glass: '#2F3E51',
      subglass: '#505E6C',
      mfpblue: '#475569',
      ultramarine: '#3904E9',
      status: {
        nodata: '#8F8F8F',
        proposed: '#0EA5E9',
        paused: '#E91E63',
        working: '#EAB308',
        done: '#14B8A6',
      },
      mfp: {
        bg: '#16263A',
        orange: '#FF8E43',
        blue: '#15385B',
        darkblue: '#0E243A',
      },
    },
    fontFamily: {},
    fontSize: {},
    fontWeight: {},
    lineHeight: {},
    letterSpacing: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
