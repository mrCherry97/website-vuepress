const path = require('path');

module.exports = {
  lang: 'en-US',
  title: 'Hello, VuePress!',
  description: 'This is my first VuePress site',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    darkMode: false,
  },
  plugins: [path.resolve(__dirname, './plugins/sidebar/')],
  bundler: '@vuepress/bundler-vite',
  bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    },
  },
};
