import * as PropTypes from "prop-types";
import * as React from "react";

import { paddingPropTypes, marginPropTypes } from "@twilio-labs/match-props";

import { CardVariant } from "./constants";
import { StyledCard } from "./styles";
import type { CardProps } from "./types";

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
