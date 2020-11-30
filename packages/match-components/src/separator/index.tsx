import * as React from "react";
import * as PropTypes from "prop-types";
import { marginPropTypes } from "@twilio-labs/match-props";
import { StyledSeparator } from "./styles";
import { SeparatorProps, SeparatorVariant } from "./types";

const Separator: React.FC<SeparatorProps> = (props) => (
  <StyledSeparator {...props} />
);

Separator.propTypes = {
  ...marginPropTypes,
  variant: PropTypes.oneOf(Object.values(SeparatorVariant)),
};

Separator.displayName = "Separator";

export { Separator, SeparatorVariant };
export type { SeparatorProps };
