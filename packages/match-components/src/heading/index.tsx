import * as React from "react";
import * as PropTypes from "prop-types";
import type { HeadingProps } from "./types";
import { HeadingVariant } from "./types";
import { StyledHeading } from "./styles";

const Heading: React.FC<HeadingProps> = ({ variant, as, ...props }) => (
  <StyledHeading as={as ? as : variant} variant={variant} {...props} />
);

Heading.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(HeadingVariant)).isRequired,
  as: PropTypes.oneOf(Object.values(HeadingVariant)),
};

Heading.displayName = "Heading";

export type { HeadingProps };
export { Heading, HeadingVariant };
