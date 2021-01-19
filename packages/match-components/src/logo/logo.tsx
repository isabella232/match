import * as React from "react";
import { colorPropType, cssUnitPropType } from "@twilio-labs/match-props";
import { StyledLogo } from "./styles";
import type { LogoProps } from "./types";

const Logo: React.FC<LogoProps> = (props) => <StyledLogo {...props} />;

Logo.propTypes = {
  color: colorPropType,
  maxHeight: cssUnitPropType,
};

Logo.defaultProps = {
  color: "gray80",
  maxHeight: "24px",
};

Logo.displayName = "Logo";

export { Logo };
