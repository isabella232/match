import * as React from "react";
import * as PropTypes from "prop-types";
import { marginPropTypes } from "@twilio-labs/match-props";
import type { HeadingProps } from "./types";
import { HeadingVariant } from "./constants";
import { StyledHeading } from "./styles";

export const Heading: React.FC<HeadingProps> = ({ variant, as, ...props }) => (
  <StyledHeading as={as ? as : variant} variant={variant} {...props} />
);

Heading.propTypes = {
  ...marginPropTypes,
  id: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(HeadingVariant)).isRequired,
  inverse: PropTypes.bool,
  as: PropTypes.oneOf(Object.values(HeadingVariant)),
};

Heading.displayName = "Heading";
