import { Space } from "@twilio-labs/match-props";

export enum CardVariant {
  PRIMARY = "primary",
  INVERSE = "inverse",
  BORDER = "border",
}

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: CardVariant;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  padding?: Space;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  paddingLeft?: Space;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  paddingRight?: Space;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  paddingBottom?: Space;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  paddingTop?: Space;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  margin?: Space;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  marginLeft?: Space;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  marginRight?: Space;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  marginBottom?: Space;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  marginTop?: Space;
}
