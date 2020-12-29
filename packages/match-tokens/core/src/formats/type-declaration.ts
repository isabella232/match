import {
  baseTokenName,
  getTokenGroups,
  formatGroupTokensWithTemplate,
} from "../utils";

export const tokenTemplate = (prop): string =>
  `export declare const ${prop.name} = ${JSON.stringify(prop.value)};`;

export const groupTemplate = (groupName, props): string => `
export declare const ${groupName}: {
${props
  .map((prop) => `${baseTokenName(prop)}: ${JSON.stringify(prop.value)},`)
  .join("\n")}
};`;

export const breakpointsTemplate = (props): string => `
export declare const breakpoints: [
${props.map((prop) => `"${prop.original.value}px"`).join(",\n")}
] & {
${props
  .map((prop) => `${prop.attributes.type}: "${prop.original.value}px"`)
  .join(",\n")}
}
`;

export const typeDeclarationTokenFormatter = (dictionary): string => {
  const singleTokens = dictionary.allProperties
    .map((prop) => tokenTemplate(prop))
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

  return [singleTokens, groupedTokens, breakpoints].join("\n");
};
