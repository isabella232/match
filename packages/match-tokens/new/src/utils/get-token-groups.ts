export const getTokenGroups = (props) =>
  [...new Set(props.map((prop) => prop.attributes.type))].sort();
