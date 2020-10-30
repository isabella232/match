export const baseTokenName = (prop) => {
  const tokenName = prop.name.slice(prop.attributes.type.length);
  return tokenName.charAt(0).toLowerCase() + tokenName.slice(1);
};
