import type { DesignToken } from "style-dictionary";

export const baseTokenName = (prop: DesignToken): string => {
  if (!prop.name) return "";
  const tokenName = prop.name.slice(prop?.attributes?.category?.length);
  return tokenName.charAt(0).toLowerCase() + tokenName.slice(1);
};
