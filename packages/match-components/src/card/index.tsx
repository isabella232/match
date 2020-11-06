import * as React from "react";
import { spaceTokenProp } from "@twilio-labs/match-props";
import { CardVariant } from "./types";
import type { CardProps } from "./types";
import { StyledCard } from "./styles";
import * as PropTypes from "prop-types";

const Card: React.FunctionComponent<CardProps> = ({ ...props }) => {
  return <StyledCard {...props} />;
};

Card.propTypes = {
  variant: PropTypes.oneOf(Object.values(CardVariant)),
  padding: spaceTokenProp,
  paddingX: spaceTokenProp,
  paddingY: spaceTokenProp,
  paddingLeft: spaceTokenProp,
  paddingRight: spaceTokenProp,
  paddingBottom: spaceTokenProp,
  paddingTop: spaceTokenProp,
  margin: spaceTokenProp,
  marginX: spaceTokenProp,
  marginY: spaceTokenProp,
  marginLeft: spaceTokenProp,
  marginRight: spaceTokenProp,
  marginBottom: spaceTokenProp,
  marginTop: spaceTokenProp,
};

Card.defaultProps = {
  variant: CardVariant.PRIMARY,
};

export { Card, CardVariant };
export type { CardProps };
