import { MarginProps, TextColorOptions } from "@twilio-labs/match-props";

export enum ParagraphVariant {
  X_SMALL = "xSmall",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  X_LARGE = "xLarge",
}

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    MarginProps {
  variant?: ParagraphVariant;
  color?: TextColorOptions;
  textAlign?: "left" | "center";
}
