const template = (
  { template },
  opts,
  { imports, componentName, jsx, exports }
) => template.smart({ plugins: ["jsx", "typescript"] }).ast`
${imports}
import * as PropTypes from "prop-types";
import { Icon, IconProps } from "@twilio-labs/match-components";
import { useUID } from "react-uid";

export interface Props extends IconProps {
  title?: string;
  decorative?: boolean;
}

function ${componentName}({ title, decorative, ...props }: Props) {
  const titleId = useUID();
  return <Icon {...props} children={${jsx}} />;
};

${componentName}.propTypes = {
  title: PropTypes.string,
  decorative: PropTypes.bool
}

${exports}
`;

module.exports = template;
