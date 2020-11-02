export const customMediaFormatter = (dictionary) =>
  dictionary.allProperties
    .map((prop) => `@custom-media --${prop.name} ${prop.value};`)
    .join("\n");
