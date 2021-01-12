import { MarginProps, TextColorOptions } from "@twilio-labs/match-props";

export enum ParagraphVariant {
  X_SMALL = "xSmall",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  X_LARGE = "xLarge",
}

export type ParagraphAlignment = "left" | "center";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    MarginProps {
  variant?: ParagraphVariant;
  /**
   * 'primary', 'secondary', 'tertiary', 'inversePrimary', 'inherit'
   * @type TextColor
   */
  color?: TextColorOptions;
  textAlign?: ParagraphAlignment;
}
