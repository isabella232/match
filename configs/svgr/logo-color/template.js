const formatTitle = require("../logo/format-title");

const template = (
  { template },
  opts,
  { imports, componentName, jsx, exports }
) => template.smart({ plugins: ["jsx", "typescript"] }).ast`
${imports}
import { useUID } from "react-uid";
import { ColorLogo } from "@twilio-labs/match-components";
import type { ColorLogoProps } from "@twilio-labs/match-components";

function ${componentName}(props: ColorLogoProps) {
  const title = "${formatTitle(componentName.name)}";
  const titleId = useUID();
  return <ColorLogo {...props} children={${jsx}} />;
};

${componentName}.propTypes = {
  ...ColorLogo.propTypes
}

${componentName}.defaultProps = {
  ...ColorLogo.defaultProps
}

${exports}
`;

module.exports = template;
