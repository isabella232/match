import { iconSizes } from "@twilio-labs/match-tokens";
import { tokenProp } from "../validators";

export const iconSizePropType = tokenProp(Object.keys(iconSizes));
