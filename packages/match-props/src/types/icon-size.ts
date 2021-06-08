import { ResponsiveValue } from "styled-system";
import { iconSizes } from "@twilio-labs/match-tokens";

export type IconSizeOptions = keyof typeof iconSizes;
export type IconSizeProp = ResponsiveValue<IconSizeOptions>;
