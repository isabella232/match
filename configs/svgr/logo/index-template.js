const path = require("path");

const template = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const logoName = basename.replace("Logo", "");
    const exportName = /^\d/.test(logoName)
      ? `Svg${logoName}Logo`
      : `${logoName}Logo`;
    return `export { default as ${exportName} } from './${basename}'`;
  });
  return exportEntries.join("\n");
};

module.exports = template;
