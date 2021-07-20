import type { DesignToken } from "style-dictionary";

import { GROUP_NAME_MAP } from "../constants";

import { getUniqueAttributes } from ".";

const getGroupName = (group: string): string => {
  const groupName = GROUP_NAME_MAP.get(group);
  if (groupName === undefined) {
    throw new Error(
      `Token item "${group}" does not have a matching plural name.`
    );
  }
  return groupName;
};

export const formatGroupTokensWithTemplate = (
  props: DesignToken[],
  categoryTemplate: (groupName: string, props: DesignToken[]) => string
): string =>
  getUniqueAttributes(props, "category")
    .map((group) =>
      categoryTemplate(
        getGroupName(group),
        props.filter((prop) => prop?.attributes?.category === group)
      )
    )
    .join("\n");
