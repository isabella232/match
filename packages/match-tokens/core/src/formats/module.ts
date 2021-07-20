import type { Dictionary, DesignToken } from "style-dictionary";

import {
  baseTokenName,
  getUniqueAttributes,
  formatGroupTokensWithTemplate,
} from "../utils";

export const tokenTemplate = (prop: DesignToken): string =>
  `export const ${prop.name} = ${JSON.stringify(prop.value)};`.concat(
    prop.comment ? ` // ${prop.comment}` : ""
  );

export const groupTemplate = (
  groupName: string,
  props: DesignToken[]
): string => `
export const ${groupName} = {
${props.map((prop) => `${baseTokenName(prop)}: ${prop.name},`).join("\n")}
};`;

export const componentsTemplate = (props: DesignToken[]): string => `
export const components = {
${getUniqueAttributes(props, "type")
  .map(
    (componentName) =>
      `${componentName}: {\n` +
      props
        .filter((prop) => prop?.attributes?.type === componentName)
        .map((prop) => `${prop?.attributes?.item}: ${prop.name}`)
        .join(",\n") +
      "\n}"
  )
  .join(",\n")}
}`;

export const breakpointsTemplate = (props: DesignToken[]): string => `
export const breakpoints = [
${props.map((prop) => `"${prop.original.value}px"`).join(",\n")}
];
${props
  .map((prop, i) => `breakpoints.${prop?.attributes?.type} = breakpoints[${i}]`)
  .join(";\n")}
`;

export const moduleTokenFormatter = ({
  dictionary,
}: {
  dictionary: Dictionary;
}): string => {
  const singleTokens = dictionary.allProperties
    .map((prop) => tokenTemplate(prop))
    .join("\n");

  const groupedTokens = formatGroupTokensWithTemplate(
    dictionary.allProperties.filter(
      (prop) => prop?.attributes?.category !== "component"
    ),
    groupTemplate
  );

  const components = componentsTemplate(
    dictionary.allProperties.filter(
      (prop) => prop?.attributes?.category === "component"
    )
  );

  const breakpoints = breakpointsTemplate(
    dictionary.allProperties.filter(
      (prop) => prop?.attributes?.category === "mediaQuery"
    )
  );

  return [singleTokens, groupedTokens, components, breakpoints].join("\n");
};
