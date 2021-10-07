const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      backgroundColor: '#27282b',
      crimson: '#FD003F'
    },
    fontFamily: {
      'sans': ['Dosis', 'Dosis'],
      'serif': ['Dosis', 'Dosis'],
      'mono': ['Dosis','Dosis'],
      'display': ['Dosis'],
      'body': ['Dosis'],
      'header':['Dosis']
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
