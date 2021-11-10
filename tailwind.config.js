module.exports = {
  plugins: [require('tailwindcss')],
  purge: {
    content: ['./docs/.vuepress/**/*.js', './docs/.vuepress/**/*.vue', './docs/.vuepress/**/*.ts'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.700'),
      green: theme('colors.green.700'),
      blue: theme('colors.blue.700'),
    }),
    extend: {
      outline: {
        blue: ['2px solid #0000ff'],
      },
    },
  },
  fontFamily: {},
  variants: {
    fill: ['hover', 'focus'],
    extend: {},
  },
};
