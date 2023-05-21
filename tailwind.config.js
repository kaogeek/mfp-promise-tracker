module.exports = {
  purge: {
    content: ['./tailwind.safelist.txt'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#BBBBBB',
      ultramarine: '#3904E9',
      status: {
        nodata: '#8F8F8F',
        proposed: '#FD9154',
        paused: '#E91E63',
        working: '#F4C51F',
        done: '#48DBDB',
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
