import { MarginProps } from "@twilio-labs/match-props";
import { FlagSize } from "./constants";

export interface FlagProps
  extends MarginProps,
    React.ImgHTMLAttributes<HTMLImageElement> {
  size?: `${FlagSize}`;
  code: string;
}

export interface StyledFlagProps {
  flagSize?: `${FlagSize}`;
}
