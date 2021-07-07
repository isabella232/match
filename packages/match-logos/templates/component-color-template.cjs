const logoTitle = require("./logo-title.cjs");
const niceName = require("./nice-name.cjs");

const template = (
  { template },
  opts,
  { imports, componentName, jsx, exports }
) => template.smart({ plugins: ["jsx"] }).ast`
${imports}
import * as PropTypes from "prop-types";
import { useUID } from "react-uid";
import { StyledColorLogo } from "../../src";

const ${componentName} = (props) => {
  const title = "${logoTitle(componentName.name)}";
  const titleId = useUID();
  return <StyledColorLogo {...props} children={${jsx}} />;
};

${componentName}.propTypes = {
  maxHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  marginTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  marginRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  marginBottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  marginLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
};

${componentName}.defaultProps = {
  maxHeight: "24px",
};

${componentName}.displayName = "${niceName(componentName.name)}";

${exports}
`;

module.exports = template;
