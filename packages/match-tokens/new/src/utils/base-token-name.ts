export const baseTokenName = (prop) => {
  const tokenName = prop.name.slice(prop.attributes.category.length);
  return tokenName.charAt(0).toLowerCase() + tokenName.slice(1);
};
