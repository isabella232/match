import { iconSizes } from "@twilio-labs/match-tokens";
import { ResponsiveValue } from "styled-system";

export type IconSizeOptions = keyof typeof iconSizes;
export type IconSizeProp = ResponsiveValue<IconSizeOptions>;
