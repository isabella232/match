import { diezVersion } from "@diez/cli-core";
import { joinToKebabCase, WebBinding } from "@diez/targets";
import { resolve } from "path";
import { DropShadows } from "../prefabs/drop-shadows";
import { dropShadowsToCss } from "../sdk/css-drop-shadows";

const binding: WebBinding<DropShadows> = {
  sources: [
    resolve(
      __dirname,
      "../../../src",
      "framework",
      "sources",
      "drop-shadows.js"
    ),
  ],
  declarations: [
    resolve(
      __dirname,
      "../../../src",
      "framework",
      "sources",
      "drop-shadows.d.ts"
    ),
  ],
  examples: [],
  assetsBinder: async (instance, _program, output, _spec, property) => {
    const name = joinToKebabCase(property.parentType, property.name);
    output.styleSheet.variables.set(
      `${name}`,
      `"${dropShadowsToCss(instance)}"`
    );
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
