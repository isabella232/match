import { ColorOptions, IconSizeProp } from "@twilio-labs/match-props";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: ColorOptions;
  size?: IconSizeProp;
  title?: string;
  decorative?: boolean;
}
