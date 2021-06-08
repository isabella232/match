import * as React from "react";
import {
  colorPropType,
  iconSizePropType,
  marginPropTypes,
} from "@twilio-labs/match-props";
import { StyledIcon } from "./styles";
import type { IconProps } from "./types";

export const Icon: React.FC<IconProps> = (props: IconProps) => (
  <StyledIcon {...props} />
);

Icon.propTypes = {
  ...marginPropTypes,
  color: colorPropType,
  size: iconSizePropType,
};

Icon.defaultProps = {
  color: "currentColor",
  size: "base",
};

Icon.displayName = "Icon";
