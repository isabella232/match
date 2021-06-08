import {
  ColorOptions,
  IconSizeProp,
  MarginProps,
} from "@twilio-labs/match-props";

export interface IconProps
  extends MarginProps,
    React.HTMLAttributes<HTMLSpanElement> {
  color?: ColorOptions;
  size?: IconSizeProp;
  title?: string;
  decorative?: boolean;
}
