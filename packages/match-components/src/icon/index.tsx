import * as React from "react";
// import * as PropTypes from "prop-types";
import { colorTokenProp, iconSizeTokenProp } from "@twilio-labs/match-props";
import { StyledIcon } from "./styles";
import { IconProps } from "./types";

const Icon: React.FC<IconProps> = ({ ...props }) => {
  return <StyledIcon {...props} />;
};

Icon.propTypes = {
  color: colorTokenProp,
  size: iconSizeTokenProp,
};

Icon.defaultProps = {
  color: "gray80",
  size: "base",
};

export { Icon, IconProps };
