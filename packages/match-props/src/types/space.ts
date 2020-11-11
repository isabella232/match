import { space } from "@twilio-labs/match-tokens";
import { ResponsiveValue } from "styled-system";

export type SpaceOptions = keyof typeof space;
export type SpaceProp = ResponsiveValue<SpaceOptions>;

export interface PaddingProps {
  /** Padding on all 4 sides */
  padding?: SpaceProp;
  /** Padding on the left and right */
  paddingX?: SpaceProp;
  /** Padding on the top and bottom */
  paddingY?: SpaceProp;
  /** Padding on the left*/
  paddingLeft?: SpaceProp;
  /** Padding on the right*/
  paddingRight?: SpaceProp;
  /** Padding on the bottom */
  paddingBottom?: SpaceProp;
  /** Padding on the top */
  paddingTop?: SpaceProp;
}

export interface MarginProps {
  /** Margin area on all 4 sides */
  margin?: SpaceProp;
  /** Margin on the left and right */
  marginX?: SpaceProp;
  /** Margin on the top and bottom */
  marginY?: SpaceProp;
  /** Margin on the left */
  marginLeft?: SpaceProp;
  /** Margin on the right */
  marginRight?: SpaceProp;
  /** Margin on the bottom */
  marginBottom?: SpaceProp;
  /** Margin on the top */
  marginTop?: SpaceProp;
}
