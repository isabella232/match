import * as PropTypes from "prop-types";
import { paddingPropTypes, marginPropTypes } from "@twilio-labs/match-props";
import { CardVariant } from "./types";
import type { CardProps } from "./types";
import { StyledCard as Card } from "./styles";

Card.propTypes = {
  ...paddingPropTypes,
  ...marginPropTypes,
  variant: PropTypes.oneOf(Object.values(CardVariant)),
};

Card.defaultProps = {
  variant: CardVariant.PRIMARY,
};

Card.displayName = "Card";

export { Card, CardVariant };
export type { CardProps };
