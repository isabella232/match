import * as React from "react";
import * as PropTypes from "prop-types";
import { StyledIcon } from "./styles";
import { IconProps } from "./types";

const Icon: React.FC<IconProps> = ({ ...props }) => {
  return <StyledIcon {...props} />;
};

Icon.propTypes = {
  color: PropTypes.string,
};

Icon.defaultProps = {
  color: "green",
};

export { Icon, IconProps };
