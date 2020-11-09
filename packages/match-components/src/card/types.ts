import { Space } from "@twilio-labs/match-props";

export enum CardVariant {
  PRIMARY = "primary",
  INVERSE = "inverse",
  BORDER = "border",
}

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: CardVariant;
  /** Padding on all 4 sides */
  padding?: Space;
  /** Padding on the left and right */
  paddingX?: Space;
  /** Padding on the top and bottom */
  paddingY?: Space;
  /** Padding on the left*/
  paddingLeft?: Space;
  /** Padding on the right*/
  paddingRight?: Space;
  /** Padding on the bottom */
  paddingBottom?: Space;
  /** Padding on the top */
  paddingTop?: Space;
  /** Margin area on all 4 sides */
  margin?: Space;
  /** Margin on the left and right */
  marginX?: Space;
  /** Margin on the top and bottom */
  marginY?: Space;
  /** Margin on the left */
  marginLeft?: Space;
  /** Margin on the right */
  marginRight?: Space;
  /** Margin on the bottom */
  marginBottom?: Space;
  /** Margin on the top */
  marginTop?: Space;
}
