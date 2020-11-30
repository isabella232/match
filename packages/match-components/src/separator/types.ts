import { MarginProps } from "@twilio-labs/match-props";

export enum SeparatorVariant {
  PRIMARY = "primary",
  INVERSE = "inverse",
}

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLHRElement>,
    MarginProps {
  variant?: SeparatorVariant;
}
