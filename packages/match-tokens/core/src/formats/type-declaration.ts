import {
  baseTokenName,
  getUniqueAttributes,
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

export const componentsTemplate = (props) => `
export declare const components = {
${getUniqueAttributes(props, "type")
  .map((componentName) =>
    `${componentName}: {\n`
      .concat(
        props
          .filter((prop) => prop.attributes.type === componentName)
          .map(
            (prop) => `${prop.attributes.item}: ${JSON.stringify(prop.value)}`
          )
          .join(",\n")
      )
      .concat("\n}")
  )
  .join(",\n")}
}`;

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

  const groupedTokens = formatGroupTokensWithTemplate(
    dictionary.allProperties.filter(
      (prop) => prop.attributes.category !== "component"
    ),
    groupTemplate
  );

  const components = componentsTemplate(
    dictionary.allProperties.filter(
      (prop) => prop.attributes.category === "component"
    )
  );

  const breakpoints = breakpointsTemplate(
    dictionary.allProperties.filter(
      (prop) => prop.attributes.category === "mediaQuery"
    )
  );

  return [singleTokens, groupedTokens, components, breakpoints].join("\n");
};
