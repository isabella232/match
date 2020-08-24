import { diezVersion } from "@diez/cli-core";
import { joinToKebabCase, WebBinding } from "@diez/targets";
import { resolve } from "path";
import { Unit } from "../prefabs/unit";
import { unitToRem, unitToPx } from "../sdk/css-unit";

const binding: WebBinding<Unit> = {
  sources: [
    resolve(__dirname, "../../../src", "framework", "sources", "unit.js"),
  ],
  declarations: [
    resolve(__dirname, "../../../src", "framework", "sources", "unit.d.ts"),
  ],
  examples: [],
  assetsBinder: async (instance, _program, output, _spec, property) => {
    const name = joinToKebabCase(property.parentType, property.name);
    output.styleSheet.variables.set(`${name}-px`, `"${unitToPx(instance)}"`);
    output.styleSheet.variables.set(`${name}-rem`, `"${unitToRem(instance)}"`);
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
