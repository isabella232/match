export const getTokenCategories = (props) =>
  [...new Set(props.map((prop) => prop.attributes.category))].sort();
