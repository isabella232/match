const niceName = require("../utils/nice-name");

const template = (
  { template },
  opts,
  { imports, componentName, jsx, exports }
) => template.smart({ plugins: ["jsx", "typescript"] }).ast`
${imports}
import { useUID } from "react-uid";
import { Icon } from "@twilio-labs/match-primitives";
import type { IconProps } from "@twilio-labs/match-primitives";

function ${componentName}({ title, decorative, ...props }: IconProps) {
  const uid = useUID();
  const titleId = title ? uid : undefined;

  if (!decorative && !title) {
    console.warn("[Icon]: Title is required for non-decorative icons.");
  }

  return <Icon {...props} children={${jsx}} />;
};

${componentName}.displayName = "${niceName(componentName.name, "Icon")}";

${componentName}.defaultProps = {
  ...Icon.defaultProps
}

${exports}
`;

module.exports = template;
