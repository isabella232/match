import * as React from "react";
import * as PropTypes from "prop-types";
import { paddingPropTypes, marginPropTypes } from "@twilio-labs/match-props";
import { CardVariant } from "./constants";
import type { CardProps } from "./types";
import { StyledCard } from "./styles";

export const Card: React.FC<CardProps> = (props) => <StyledCard {...props} />;

Card.propTypes = {
  ...paddingPropTypes,
  ...marginPropTypes,
  variant: PropTypes.oneOf(Object.values(CardVariant)),
};

Card.defaultProps = {
  variant: CardVariant.PRIMARY,
};

Card.displayName = "Card";
