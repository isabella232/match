const path = require("path");
const niceName = require("./nice-name.cjs");

const template = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = niceName(basename);
    return `export { default as ${exportName} } from './${basename}'`;
  });
  return exportEntries.join("\n");
};

module.exports = template;
