import { getUniqueAttributes } from ".";
import { GROUP_NAME_MAP } from "../constants";

const getGroupName = (group): string => {
  const groupName = GROUP_NAME_MAP.get(group);
  if (groupName === undefined) {
    throw new Error(
      `Token item "${group}" does not have a matching plural name.`
    );
  }
  return groupName;
};

export const formatGroupTokensWithTemplate = (
  props,
  categoryTemplate
): string =>
  getUniqueAttributes(props, "category")
    .map((group) =>
      categoryTemplate(
        getGroupName(group),
        props.filter((prop) => prop.attributes.category === group)
      )
    )
    .join("\n");
