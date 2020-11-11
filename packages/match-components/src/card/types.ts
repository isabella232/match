import { PaddingProps, MarginProps } from "@twilio-labs/match-props";

export enum CardVariant {
  PRIMARY = "primary",
  INVERSE = "inverse",
  BORDER = "border",
}

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PaddingProps,
    MarginProps {
  variant?: CardVariant;
}
