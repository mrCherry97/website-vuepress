const { path } = require('@vuepress/utils');

const sidebarPlugin = {
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'),
};
module.exports = sidebarPlugin;
