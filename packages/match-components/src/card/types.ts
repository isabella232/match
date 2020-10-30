import { SpaceOptions } from "@twilio-labs/match-props";

export enum CardVariant {
  PRIMARY = "primary",
  INVERSE = "inverse",
  BORDER = "border",
}

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: CardVariant;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  padding?: SpaceOptions;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  paddingLeft?: SpaceOptions;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  paddingRight?: SpaceOptions;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  paddingBottom?: SpaceOptions;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  paddingTop?: SpaceOptions;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  margin?: SpaceOptions;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  marginLeft?: SpaceOptions;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  marginRight?: SpaceOptions;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  marginBottom?: SpaceOptions;
  /** scale100 | scale180 | scale260 | scale340 | scale420 | scale540 */
  marginTop?: SpaceOptions;
}
