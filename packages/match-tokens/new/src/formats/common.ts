import {
  baseTokenName,
  getTokenGroups,
  formatGroupTokensWithTemplate,
} from "../utils";

export const tokenTemplate = (prop): string =>
  `const ${prop.name} = ${JSON.stringify(prop.value)};`.concat(
    prop.comment ? ` // ${prop.comment}` : ""
  );
export const tokenExportTemplate = (prop): string => `${prop.name},`;

export const groupTemplate = (groupName, props): string => `${groupName}: {
${props.map((prop) => `${baseTokenName(prop)}: ${prop.name},`).join("\n")}
},`;

export const commonJsTokenFormatter = (dictionary): string => {
  const singleTokens = dictionary.allProperties
    .map((prop) => tokenTemplate(prop))
    .join("\n");

  const singleTokenExports = dictionary.allProperties
    .map((prop) => tokenExportTemplate(prop))
    .join("\n");

  const groups = getTokenGroups(dictionary.allProperties);

  const groupedTokens = formatGroupTokensWithTemplate(
    dictionary.allProperties,
    groups,
    groupTemplate
  );

  return [
    singleTokens,
    "module.exports = {",
    singleTokenExports,
    groupedTokens,
    "}",
  ].join("\n");
};
