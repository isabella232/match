import { space } from "@twilio-labs/match-tokens";

import { tokenProp } from "../validators";

export const spacePropType = tokenProp(Object.keys(space));

export const paddingPropTypes = {
  padding: spacePropType,
  paddingLeft: spacePropType,
  paddingRight: spacePropType,
  paddingBottom: spacePropType,
  paddingTop: spacePropType,
  paddingX: spacePropType,
  paddingY: spacePropType,
};

export const marginPropTypes = {
  margin: spacePropType,
  marginLeft: spacePropType,
  marginRight: spacePropType,
  marginBottom: spacePropType,
  marginTop: spacePropType,
  marginX: spacePropType,
  marginY: spacePropType,
};
