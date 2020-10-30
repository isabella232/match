const pluralCategoryMap = new Map(
  Object.entries({
    color: "colors",
  })
);

const getPluralCategoryName = (category) => {
  const pluralName = pluralCategoryMap.get(category);
  if (pluralName === undefined) {
    throw new Error(
      `Category "${category}" does not have a matching plural name.`
    );
  }
  return pluralName;
};

export const formatGroupTokensWithTemplate = (
  props,
  categories,
  categoryTemplate
) =>
  categories
    .map((category) =>
      categoryTemplate(
        getPluralCategoryName(category),
        props.filter((prop) => prop.attributes.category === category)
      )
    )
    .join("\n");
