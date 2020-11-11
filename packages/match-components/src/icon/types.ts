import { ColorProp, IconSizeProp } from "@twilio-labs/match-props";

export interface IconProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
  color?: ColorProp;
  size?: IconSizeProp;
  title?: string;
  decorative?: boolean;
}
