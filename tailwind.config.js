module.exports = {
  plugins: [require('tailwindcss')],
  purge: {
    content: [
      './docs/.vuepress/**/*.js',
      './docs/.vuepress/**/*.vue',
      './docs/.vuepress/**/*.ts',
    ],
  },
};
