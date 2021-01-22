import * as React from "react";
import { cssUnitPropType } from "@twilio-labs/match-props";
import { StyledColorLogo } from "./styles";
import type { ColorLogoProps } from "./types";

const ColorLogo: React.FC<ColorLogoProps> = (props) => (
  <StyledColorLogo {...props} />
);

ColorLogo.propTypes = {
  maxHeight: cssUnitPropType,
};

ColorLogo.defaultProps = {
  maxHeight: "24px",
};

ColorLogo.displayName = "ColorLogo";

export { ColorLogo };
