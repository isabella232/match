const niceName = require("./nice-name.cjs");

const template = (
  { template },
  opts,
  { imports, componentName, jsx, exports }
) => template.smart({ plugins: ["jsx"] }).ast`
${imports}
import * as PropTypes from "prop-types";
import { useUID } from "react-uid";
import { StyledIcon } from "@twilio-labs/match-icons-core";

const ${componentName} = ({ title, decorative = false, ...props }) => {
  const uid = useUID();
  const titleId = title ? uid : undefined;

  if (!decorative && !title) {
    console.warn("[Icon]: Title is required for non-decorative icons.");
  }

  return <StyledIcon {...props} children={${jsx}} />;
};

${componentName}.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "baseRed",
    "blue50",
    "blue60",
    "blue80",
    "baseGreen",
    "baseOrange",
    "basePurple",
    "gray80",
    "gray90",
    "gray100",
    "currentColor",
    "inherit"
  ]),
  size: PropTypes.string,
  title: PropTypes.string,
  decorative: PropTypes.bool,
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
  color: "gray80",
  size: "base",
  decorative: false,
};

${componentName}.displayName = "${niceName(componentName.name)}";

${exports}
`;

module.exports = template;
