import * as React from "react";
// import * as PropTypes from "prop-types";
import { colorTokenProp } from "@twilio-labs/match-props";
import { StyledIcon } from "./styles";
import { IconProps } from "./types";

const Icon: React.FC<IconProps> = ({ ...props }) => {
  return <StyledIcon {...props} />;
};

Icon.propTypes = {
  color: colorTokenProp,
};

Icon.defaultProps = {
  color: "gray80",
};

export { Icon, IconProps };
