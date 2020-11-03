const pluralGroupMap = new Map(
  Object.entries({
    color: "colors",
    backgroundColor: "backgroundColors",
    borderColor: "borderColors",
    borderWidth: "borderWidths",
    breakpoint: "breakpoints",
    component: "components",
    fontFamily: "fontFamilies",
    fontSize: "fontSizes",
    fontWeight: "fontWeights",
    gradient: "gradients",
    iconSize: "iconSizes",
    shadow: "shadows",
  })
);

const getPluralGroupName = (group): string => {
  const pluralName = pluralGroupMap.get(group);
  if (pluralName === undefined) {
    throw new Error(
      `Token item "${group}" does not have a matching plural name.`
    );
  }
  return pluralName;
};

export const formatGroupTokensWithTemplate = (
  props,
  groups,
  categoryTemplate
): string =>
  groups
    .map((group) =>
      categoryTemplate(
        getPluralGroupName(group),
        props.filter((prop) => prop.attributes.category === group)
      )
    )
    .join("\n");
