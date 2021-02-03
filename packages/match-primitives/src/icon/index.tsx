import * as React from "react";
import * as PropTypes from "prop-types";
import {
  colorPropType,
  iconSizePropType,
  marginPropTypes,
} from "@twilio-labs/match-props";
import { StyledIcon } from "./styles";
import type { IconProps } from "./types";

const Icon: React.FC<IconProps> = (props) => <StyledIcon {...props} />;

Icon.propTypes = {
  ...marginPropTypes,
  color: colorPropType,
  size: iconSizePropType,
  title: PropTypes.string,
  decorative: PropTypes.bool,
};

Icon.defaultProps = {
  color: "gray80",
  size: "base",
  decorative: false,
};

Icon.displayName = "Icon";

export { Icon, StyledIcon };
export type { IconProps };
