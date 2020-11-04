export const customMediaTokenFormatter = (dictionary): string =>
  dictionary.allProperties
    .map((prop) => `@custom-media --${prop.name} ${prop.value};`)
    .join("\n");
