import { ResponsiveValue } from "styled-system";

import { space } from "@twilio-labs/match-tokens";

export type SpaceOptions = keyof typeof space;
export type SpaceProp = ResponsiveValue<SpaceOptions>;

export interface PaddingProps {
  /**
   * Padding on all 4 sides
   * @type Space
   */
  padding?: SpaceProp;
  /**
   * Padding on the left and right
   * @type Space
   */
  paddingX?: SpaceProp;
  /**
   * Padding on the top and bottom
   * @type Space
   */
  paddingY?: SpaceProp;
  /**
   * Padding on the left
   * @type Space
   */
  paddingLeft?: SpaceProp;
  /**
   * Padding on the right
   * @type Space
   */
  paddingRight?: SpaceProp;
  /**
   * Padding on the bottom
   * @type Space
   */
  paddingBottom?: SpaceProp;
  /**
   * Padding on the top
   * @type Space
   */
  paddingTop?: SpaceProp;
}

export interface MarginProps {
  /**
   * Margin area on all 4 sides
   * @type Space
   */
  margin?: SpaceProp;
  /**
   * Margin on the left and right
   * @type Space
   */
  marginX?: SpaceProp;
  /**
   * Margin on the top and bottom
   * @type Space
   */
  marginY?: SpaceProp;
  /**
   * Margin on the left
   * @type Space
   */
  marginLeft?: SpaceProp;
  /**
   * Margin on the right
   * @type Space
   */
  marginRight?: SpaceProp;
  /**
   * Margin on the bottom
   * @type Space
   */
  marginBottom?: SpaceProp;
  /**
   * Margin on the top
   * @type Space
   */
  marginTop?: SpaceProp;
}
