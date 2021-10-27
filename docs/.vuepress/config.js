const dirTree = require("directory-tree");
const path = require("path");
const folderName = "guide";
const results = dirTree(path.join(__dirname, `../${folderName}`), {
  extensions: /\.md/,
});

module.exports = {
  description:
    "Kyma is an open-source project designed natively on Kubernetes. It allows you to extend enterprise applications in a quick and modern way, using serverless computing or microservice architecture.",
  theme: path.resolve(__dirname, "./theme"),
  head: [
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  ],
  themeConfig: {
    search: false,
    navbar: false,
    docs: results,
    darkMode: false,
  },
  plugins: [
    [
      "vuepress-plugin-right-anchor",
      {
        showDepth: 2,
        expand: {
          trigger: "click",
          clickModeDefaultOpen: false,
        },
        disableGlobalUI: true,
      },
    ],
    [
      require("./plugins/sidebar"),
      {
        docs: results,
      },
    ],
    [
      "one-click-copy",
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ],
        copyMessage: "Copied to clipboard.",
        duration: 1000,
      },
    ],
    ["tabs"],
    ["@vuepress/back-to-top"],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "./public"),
      },
    },
  },
};
