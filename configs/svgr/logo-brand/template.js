const logoTitle = require("../utils/logo-title");

const template = (
  { template },
  opts,
  { imports, componentName, jsx, exports }
) => template.smart({ plugins: ["jsx", "typescript"] }).ast`
${imports}
import { useUID } from "react-uid";
import { ColorLogo } from "@twilio-labs/match-primitives";
import type { ColorLogoProps } from "@twilio-labs/match-primitives";

function ${componentName}(props: ColorLogoProps) {
  const title = "${logoTitle(componentName.name)}";
  const titleId = useUID();
  return <ColorLogo {...props} children={${jsx}} />;
};

${componentName}.displayName = "${componentName.name.slice(3)}";

${componentName}.defaultProps = {
  ...ColorLogo.defaultProps
}

${exports}
`;

module.exports = template;
