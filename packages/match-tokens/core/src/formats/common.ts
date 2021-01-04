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

export const breakpointsTemplate = (props): string => `
const breakpoints = [
${props.map((prop) => `"${prop.original.value}px"`).join(",\n")}
];
${props
  .map((prop, i) => `breakpoints.${prop.attributes.type} = breakpoints[${i}]`)
  .join(";\n")}
`;

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

  const breakpoints = breakpointsTemplate(
    dictionary.allProperties.filter(
      (prop) => prop.attributes.category === "mediaQuery"
    )
  );

  return [
    singleTokens,
    breakpoints,
    "module.exports = {",
    singleTokenExports,
    groupedTokens,
    "breakpoints",
    "}",
  ].join("\n");
};
