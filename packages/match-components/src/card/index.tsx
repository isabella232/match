import * as React from "react";
import { spaceTokenProp } from "@twilio-labs/match-props";
import { CardProps, CardVariant } from "./types";
import { StyledCard } from "./styles";
import * as PropTypes from "prop-types";

const Card: React.FunctionComponent<CardProps> = ({ ...props }) => {
  return <StyledCard {...props} />;
};

Card.propTypes = {
  variant: PropTypes.oneOf(Object.values(CardVariant)),
  padding: spaceTokenProp,
  paddingLeft: spaceTokenProp,
  paddingRight: spaceTokenProp,
  paddingBottom: spaceTokenProp,
  paddingTop: spaceTokenProp,
  margin: spaceTokenProp,
  marginLeft: spaceTokenProp,
  marginRight: spaceTokenProp,
  marginBottom: spaceTokenProp,
  marginTop: spaceTokenProp,
};

Card.defaultProps = {
  variant: CardVariant.PRIMARY,
};

export { Card, CardProps };
