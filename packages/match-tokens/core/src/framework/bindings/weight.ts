import { diezVersion } from "@diez/cli-core";
import { joinToKebabCase, WebBinding } from "@diez/targets";
import { resolve } from "path";
import { Weight } from "../prefabs/weight";

const binding: WebBinding<Weight> = {
  sources: [
    resolve(__dirname, "../../../src", "framework", "sources", "weight.js"),
  ],
  declarations: [
    resolve(__dirname, "../../../src", "framework", "sources", "weight.d.ts"),
  ],
  examples: [],
  assetsBinder: async (instance, _program, output, _spec, property) => {
    const name = joinToKebabCase(property.parentType, property.name);
    output.styleSheet.variables.set(name, instance.weight.toString());
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
