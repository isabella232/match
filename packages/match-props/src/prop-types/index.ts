import { TwilioDesignTokens } from "@twilio-labs/match-tokens";
import { tokenProp } from "./token-validator";

const DS = new TwilioDesignTokens();

export const colorTokenProp = tokenProp(Object.keys(DS.swatch));
export const iconSizeTokenProp = tokenProp(Object.keys(DS.iconSize));
export const spaceTokenProp = tokenProp(Object.keys(DS.space));
export const shadowTokenProp = tokenProp(Object.keys(DS.shadow));

export { responsiveProp } from "./responsive-validator";
