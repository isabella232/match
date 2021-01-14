const formatTitle = (componentName) => {
  // trim "Svg"
  let title = componentName.slice(3);

  switch (title.toLowerCase()) {
    case "ing":
    case "qvc":
      return title.toUpperCase();
    case "dxw":
      return title.toLowerCase();
    case "1800flowers":
      return "1-800-Flowers";
    default:
      return title.replace(/([A-Z])/g, " $1").trim();
  }
};

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
  const title = "${formatTitle(componentName.name)}";
  const titleId = useUID();
  return <Logo {...props} children={${jsx}} />;
};

${componentName}.propTypes = {
  ...Logo.propTypes
}

${componentName}.defaultProps = {
  ...Logo.defaultProps
}

${exports}
`;

module.exports = template;
