const pluralGroupMap = new Map(
  Object.entries({
    color: "colors",
    backgroundColor: "backgroundColors",
    borderColor: "borderColors",
    borderWidth: "borderWidths",
  })
);

const getPluralGroupName = (group) => {
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
) =>
  groups
    .map((group) =>
      categoryTemplate(
        getPluralGroupName(group),
        props.filter((prop) => prop.attributes.type === group)
      )
    )
    .join("\n");
