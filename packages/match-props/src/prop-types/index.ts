import { TwilioDesignTokens } from "@twilio-labs/match-tokens";
import { tokenProp } from "./token-validator";

const DS = new TwilioDesignTokens();

export const colorTokenProp = tokenProp(Object.keys(DS.swatch));

export { responsiveProp } from "./responsive-validator";
