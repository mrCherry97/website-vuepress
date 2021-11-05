const path = require('path');
const dirTree = require('directory-tree');
const folderName = 'guide';
const markdownFilesTree = dirTree(path.join(__dirname, `../${folderName}`), {
  extensions: /\.md/,
});

module.exports = {
  markdownFilesTree,
};
