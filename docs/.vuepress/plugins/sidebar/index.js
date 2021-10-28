const { path } = require('@vuepress/utils');

module.exports = (options = {}, ctx) => {
  return {
    clientAppEnhanceFiles: [path.resolve(__dirname, './path/to/clientAppEnhance.js')],
  };
};
