const logoTitle = require("../utils/logo-title");
const niceName = require("../utils/nice-name");

const template = (
  { template },
  opts,
  { imports, componentName, jsx, exports }
) => template.smart({ plugins: ["jsx", "typescript"] }).ast`
${imports}
import { useUID } from "react-uid";
import { Logo } from "@twilio-labs/match-components";
import type { LogoProps } from "@twilio-labs/match-components";

function ${componentName}(props: LogoProps) {
  const title = "${logoTitle(componentName.name)}";
  const titleId = useUID();
  return <Logo {...props} children={${jsx}} />;
};

${componentName}.displayName = "${niceName(componentName.name, "Logo")}";

${componentName}.defaultProps = {
  ...Logo.defaultProps
}

${exports}
`;

module.exports = template;
