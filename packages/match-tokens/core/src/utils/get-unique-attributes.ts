import type { DesignToken } from "style-dictionary";

export const getUniqueAttributes = (
  props: DesignToken[],
  attribute: string
): string[] =>
  [
    ...new Set(
      props
        .map((prop) => prop?.attributes && prop.attributes[attribute])
        .filter(Boolean)
    ),
  ].sort();
