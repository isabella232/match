const template = (
  { template },
  opts,
  { imports, componentName, jsx, exports }
) => template.smart({ plugins: ["jsx", "typescript"] }).ast`
${imports}
import { useUID } from "react-uid";
import { Icon } from "@twilio-labs/match-components";
import type { IconProps } from "@twilio-labs/match-components";

function ${componentName}({ title, decorative, ...props }: IconProps) {
  const titleId = useUID();

  if (!decorative && !title) {
    console.warn("[Icon]: Title is required for non-decorative icons.");
  }

  return <Icon {...props} children={${jsx}} />;
};

${componentName}.propTypes = {
  ...Icon.propTypes
}

${componentName}.defaultProps = {
  ...Icon.defaultProps
}

${exports}
`;

module.exports = template;
