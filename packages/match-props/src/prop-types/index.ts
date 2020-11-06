import { colors, space, iconSizes } from "@twilio-labs/match-tokens";
import { tokenProp } from "./token-validator";

export const colorTokenProp = tokenProp(Object.keys(colors));
export const iconSizeTokenProp = tokenProp(Object.keys(iconSizes));
export const spaceTokenProp = tokenProp(Object.keys(space));

export { responsiveProp } from "./responsive-validator";
