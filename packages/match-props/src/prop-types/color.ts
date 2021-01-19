import {
  colors,
  backgroundColors,
  textColors,
} from "@twilio-labs/match-tokens";
import { tokenProp } from "../validators";

export const colorPropType = tokenProp([
  ...Object.keys(colors),
  "currentColor",
]);

export const backgroundColorPropType = tokenProp(Object.keys(backgroundColors));

export const textColorPropType = tokenProp(Object.keys(textColors));
