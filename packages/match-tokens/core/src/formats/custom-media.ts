import type { Dictionary } from "style-dictionary";

export const customMediaTokenFormatter = ({
  dictionary,
}: {
  dictionary: Dictionary;
}): string =>
  dictionary.allProperties
    .map((prop) => `@custom-media --${prop.name} ${prop.value};`)
    .join("\n");
