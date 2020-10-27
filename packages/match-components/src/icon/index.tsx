import * as React from "react";
import * as PropTypes from "prop-types";
import { colorTokenProp, iconSizeTokenProp } from "@twilio-labs/match-props";
import { StyledIcon } from "./styles";
import { IconProps } from "./types";

const Icon: React.FC<IconProps> = ({ ...props }) => {
  return <StyledIcon {...props} />;
};

Icon.propTypes = {
  color: colorTokenProp,
  size: iconSizeTokenProp,
  title: PropTypes.string,
  decorative: PropTypes.bool,
};

Icon.defaultProps = {
  color: "gray80",
  size: "base",
  decorative: false,
};

export { Icon, IconProps };
