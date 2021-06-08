import * as PropTypes from "prop-types";
import * as React from "react";
import { marginPropTypes } from "@twilio-labs/match-props";
import { SeparatorVariant } from "./constants";
import { StyledSeparator } from "./styles";
import type { SeparatorProps } from "./types";

export const Separator: React.FC<SeparatorProps> = (props) => (
  <StyledSeparator {...props} />
);

Separator.propTypes = {
  ...marginPropTypes,
  variant: PropTypes.oneOf(Object.values(SeparatorVariant)),
};

Separator.displayName = "Separator";

Separator.defaultProps = {
  variant: SeparatorVariant.PRIMARY,
  marginY: "scale20",
};
