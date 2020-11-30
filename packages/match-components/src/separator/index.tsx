import * as React from "react";
import * as PropTypes from "prop-types";
import { marginPropTypes } from "@twilio-labs/match-props";
import { StyledSeparator } from "./styles";
import { SeparatorProps, SeparatorVariant } from "./types";
import { space } from "@twilio-labs/match-tokens";

const Separator: React.FC<SeparatorProps> = (props) => (
  <StyledSeparator {...props} />
);

Separator.propTypes = {
  ...marginPropTypes,
  variant: PropTypes.oneOf(Object.values(SeparatorVariant)),
};

Separator.displayName = "Separator";

Separator.defaultProps = {
  variant: SeparatorVariant.PRIMARY,
  marginY: space.scale20,
};

export { Separator, SeparatorVariant };
export type { SeparatorProps };
