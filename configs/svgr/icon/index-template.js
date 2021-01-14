const path = require("path");

const template = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename)
      ? `Svg${basename}Icon`
      : `${basename}Icon`;
    return `export { default as ${exportName} } from './${basename}'`;
  });
  return exportEntries.join("\n");
};

module.exports = template;
