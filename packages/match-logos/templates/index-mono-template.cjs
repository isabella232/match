const path = require("path");
const { writeFileSync } = require("fs");

const niceName = require("./nice-name.cjs");

const template = (filePaths) => {
  const typesEntries = ['import { LogoType } from "../../src";'];
  const indexEntries = [];

  for (const filePath of filePaths) {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = niceName(basename);
    typesEntries.push(`export const ${exportName}: LogoType;`);
    indexEntries.push(
      `export { default as ${exportName} } from './${basename}';`
    );
  }

  writeFileSync(
    path.join(path.dirname(filePaths[0]), "index.d.ts"),
    typesEntries.join("\n")
  );

  return indexEntries.join("\n");
};

module.exports = template;
