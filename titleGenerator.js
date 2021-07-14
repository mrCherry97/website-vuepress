const fs = require("fs");
const path = require("path");
const dirPath = "./docs/guide";

const getAllFiles = (directoryName) => {
  fs.readdir(directoryName, (error, files) => {
    if (error) {
      console.log("Error: ", error);
      return;
    }
    files.forEach((file) => {
      const fullPath = path.join(directoryName, file);
      fs.stat(fullPath, (error, file) => {
        if (error) {
          console.log("Error: ", error);
          return;
        }
        if (file.isDirectory()) {
          return getAllFiles(fullPath);
        }
        return readAndWriteFile(fullPath.toString());
      });
    });
  });
};

getAllFiles(dirPath);

const readAndWriteFile = (directoryName) => {
  fs.readFile(directoryName, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    if (!directoryName.includes(".md")) return;

    let newData = data.split("\n");
    const title = [`# ${newData[1].replace("title:", "")}\n`];
    newData.splice(4, 0, ...title);
    newData = newData.join("\n");
    writeFile(directoryName, newData);
  });
};

const writeFile = (directoryName, data) => {
  fs.writeFile(directoryName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("The MD file was saved!");
  });
};
