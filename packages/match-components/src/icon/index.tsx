import * as PropTypes from "prop-types";
import { colorPropType, iconSizePropType } from "@twilio-labs/match-props";
import { StyledIcon as Icon } from "./styles";
import type { IconProps } from "./types";

Icon.propTypes = {
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

export { Icon };
export type { IconProps };
