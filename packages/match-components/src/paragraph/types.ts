import { MarginProps, TextColorOptions } from "@twilio-labs/match-props";
import { ParagraphVariant } from "./constants";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    MarginProps {
  variant?: `${ParagraphVariant}`;
  /**
   * 'primary', 'secondary', 'tertiary', 'inversePrimary', 'inherit'
   * @type TextColor
   */
  color?: TextColorOptions;
  textAlign?: "left" | "center";
}
