const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.shadow-inner-custom': {
          'box-shadow': 'inset 0px 5px 3px rgba(0,0,0,0.7)',
        },
      }
      addUtilities(newUtilities)
    })
  ],
}
