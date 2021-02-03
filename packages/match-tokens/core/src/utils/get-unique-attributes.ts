export const getUniqueAttributes = (props, attribute: string) =>
  [...new Set(props.map((prop) => prop.attributes[attribute]))].sort();
