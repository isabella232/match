import { colors, backgroundColors } from "@twilio-labs/match-tokens";
import { tokenProp } from "../validators";

export const colorPropType = tokenProp(Object.keys(colors));
export const backgroundColorPropType = tokenProp(Object.keys(backgroundColors));
