const path = require("path");
const niceName = require("../utils/nice-name");

const template = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = niceName(basename, "Logo");
    return `export { default as ${exportName} } from './${basename}'`;
  });
  return exportEntries.join("\n");
};

module.exports = template;
