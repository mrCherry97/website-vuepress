const { path } = require("@vuepress/shared-utils");

module.exports = (options = {}, ctx) => {
  return {
    enhanceAppFiles: [path.resolve(__dirname, "enhanceAppFile.js")],
  };
};
