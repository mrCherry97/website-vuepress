const { path } = require('@vuepress/utils');

module.exports = {
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, './layouts/HomePageLayout.vue'),
    404: path.resolve(__dirname, './layouts/404.vue'),
  },
};
