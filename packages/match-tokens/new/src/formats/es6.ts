import {
  stripCategory,
  getTokenCategories,
  formatGroupTokensWithTemplate,
} from "../utils";

export const tokenTemplate = (prop): string =>
  `export const ${prop.name} = ${JSON.stringify(prop.value)};`.concat(
    prop.comment ? ` // ${prop.comment}` : ""
  );

export const categoryTemplate = (categoryName, props) => `
export const ${categoryName} = {
${props.map((prop) => `${stripCategory(prop)}: ${prop.name},`).join("\n")}
};
`;

export const es6TokenFormatter = (dictionary): string => {
  const singleTokens = dictionary.allProperties
    .map((prop) => tokenTemplate(prop))
    .join("\n");

  const categories = getTokenCategories(dictionary.allProperties);

  const groupedTokens = formatGroupTokensWithTemplate(
    dictionary.allProperties,
    categories,
    categoryTemplate
  );
  categories.map((group) => {
    return (
      `export const ${group} = {\n` +
      dictionary.allProperties
        .filter((prop) => prop.path[0] === group)
        .map((prop) => prop.name)
        .join(",\n") +
      "\n}"
    );
  });

  return [singleTokens, groupedTokens].join("\n");
};
