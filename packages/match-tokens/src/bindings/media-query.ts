import { diezVersion } from "@diez/cli-core";
import { joinToKebabCase, WebBinding } from "@diez/targets";
import { resolve } from "path";
import { MediaQuery } from "../components/media-query";
import { queryToCss } from "../sdk/css-media-query";

const binding: WebBinding<MediaQuery> = {
  sources: [resolve(__dirname, "../../", "sources", "media-query.js")],
  declarations: [resolve(__dirname, "../../", "sources", "media-query.d.ts")],
  examples: [],
  assetsBinder: async (instance, _program, output, _spec, property) => {
    const name = joinToKebabCase(property.parentType, property.name);
    output.styleSheet.variables.set(`${name}`, `"${queryToCss(instance)}"`);
  },
  dependencies: [
    {
      packageJson: {
        name: "@diez/web-sdk-common",
        versionConstraint: `^${diezVersion}`,
      },
    },
  ],
};

export = binding;
