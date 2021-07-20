import type { Dictionary, DesignToken } from "style-dictionary";

import {
  baseTokenName,
  getUniqueAttributes,
  formatGroupTokensWithTemplate,
} from "../utils";

export const tokenTemplate = (prop: DesignToken): string =>
  `export declare const ${prop.name} = ${JSON.stringify(prop.value)};`;

export const groupTemplate = (
  groupName: string,
  props: DesignToken[]
): string => `
export declare const ${groupName}: {
${props
  .map((prop) => `${baseTokenName(prop)}: ${JSON.stringify(prop.value)},`)
  .join("\n")}
};`;

export const componentsTemplate = (props: DesignToken[]): string => `
export declare const components = {
${getUniqueAttributes(props, "type")
  .map(
    (componentName) =>
      `${componentName}: {\n` +
      props
        .filter((prop) => prop?.attributes?.type === componentName)
        .map(
          (prop) => `${prop?.attributes?.item}: ${JSON.stringify(prop.value)}`
        )
        .join(",\n") +
      "\n}"
  )
  .join(",\n")}
}`;

export const breakpointsTemplate = (props: DesignToken[]): string => `
export declare const breakpoints: [
${props.map((prop) => `"${prop.original.value}px"`).join(",\n")}
] & {
${props
  .map((prop) => `${prop?.attributes?.type}: "${prop.original.value}px"`)
  .join(",\n")}
}
`;

export const typeDeclarationTokenFormatter = ({
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
