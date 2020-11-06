import {
  baseTokenName,
  getTokenGroups,
  formatGroupTokensWithTemplate,
} from "../utils";

export const tokenTemplate = (prop): string =>
  `export const ${prop.name} = ${JSON.stringify(prop.value)};`.concat(
    prop.comment ? ` // ${prop.comment}` : ""
  );

export const groupTemplate = (groupName, props): string => `
export const ${groupName} = {
${props.map((prop) => `${baseTokenName(prop)}: ${prop.name},`).join("\n")}
};`;

export const es6TokenFormatter = (dictionary): string => {
  const singleTokens = dictionary.allProperties
    .map((prop) => tokenTemplate(prop))
    .join("\n");

  const groups = getTokenGroups(dictionary.allProperties);

  const groupedTokens = formatGroupTokensWithTemplate(
    dictionary.allProperties,
    groups,
    groupTemplate
  );

  return [singleTokens, groupedTokens].join("\n");
};
