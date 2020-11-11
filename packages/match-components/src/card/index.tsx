import * as React from "react";
import { paddingPropTypes, marginPropTypes } from "@twilio-labs/match-props";
import { CardVariant } from "./types";
import type { CardProps } from "./types";
import { StyledCard } from "./styles";
import * as PropTypes from "prop-types";

const Card: React.FunctionComponent<CardProps> = ({ ...props }) => {
  return <StyledCard {...props} />;
};

Card.propTypes = {
  ...paddingPropTypes,
  ...marginPropTypes,
  variant: PropTypes.oneOf(Object.values(CardVariant)),
};

Card.defaultProps = {
  variant: CardVariant.PRIMARY,
};

export { Card, CardVariant };
export type { CardProps };
