import * as CSS from "csstype";
import { ResponsiveValue } from "styled-system";

import {
  PaddingProps,
  MarginProps,
  SpaceProp,
  BackgroundColorProp,
} from "@twilio-labs/match-props";

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PaddingProps,
    MarginProps {
  /**
   * Sets the gap between rows and columns. Suggested values: 'space420', 'space260', 'space180', 'space100'
   * @type Space
   */
  gridGap?: SpaceProp;
  /**
   * Sets the gap between rows. Suggested values: 'space420', 'space260', 'space180', 'space100'
   * @type Space
   */
  gridRowGap?: SpaceProp;
  /**
   * Sets the gap between columns. Suggested values: 'space420', 'space260', 'space180', 'space100'
   * @type Space
   */
  gridColumnGap?: SpaceProp;
  /**
   * Specifies how auto-placed items get placed in the grid
   * @type string
   */
  gridAutoFlow?: ResponsiveValue<CSS.Property.GridAutoFlow>;
  /**
   * Specifies the size of an implicitly-created grid row track or pattern of tracks
   * @type string
   */
  gridAutoRows?: ResponsiveValue<CSS.Property.GridAutoRows>;
  /**
   * Specifies the size of an implicitly-created grid column track or pattern of tracks
   * @type string
   */
  gridAutoColumns?: ResponsiveValue<CSS.Property.GridAutoColumns>;
  /**
   * Defines the line names and track sizing functions of the grid rows
   * @type string
   */
  gridTemplateRows?: ResponsiveValue<CSS.Property.GridTemplateRows>;
  /**
   * Defines the line names and track sizing functions of the grid columns
   * @type string
   */
  gridTemplateColumns?: ResponsiveValue<CSS.Property.GridTemplateColumns>;
  /**
   * Specifies named grid areas, establishing the cells in the grid and assigning them names
   * @type string
   */
  gridTemplateAreas?: ResponsiveValue<CSS.Property.GridTemplateAreas>;
  /**
   * Sets the align-self value for all children
   * @type string
   */
  alignItems?: ResponsiveValue<CSS.Property.AlignItems>;
  /**
   * Sets the distribution of space between and around the grid’s children along the cross/block axis
   * @type string
   */
  alignContent?: ResponsiveValue<CSS.Property.AlignContent>;
  /**
   * Sets the justify-self value for all children
   * @type string
   */
  justifyItems?: ResponsiveValue<CSS.Property.JustifyItems>;
  /**
   * Sets distribution of space between and around the gird’s children along the main-axis/inline axis
   * @type string
   */
  justifyContent?: ResponsiveValue<CSS.Property.JustifyContent>;
}

export interface CellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PaddingProps,
    MarginProps {
  /**
   * Aligns the cell in the grid along the appropriate axis
   * @type string
   */
  alignSelf?: ResponsiveValue<CSS.Property.AlignSelf>;
  /**
   * Sets the justification of the cell in the grid along the appropriate axis
   * @type string
   */
  justifySelf?: ResponsiveValue<CSS.Property.JustifySelf>;
  /**
   * Set the order of the cells. Cells in the same grid are sorted in ascending order.
   * @type int
   */
  order?: ResponsiveValue<CSS.Property.Order>;
  /**
   * Specifies the cell’s size and location within the column of a grid
   * @type string
   */
  gridColumn?: ResponsiveValue<CSS.Property.GridColumn>;
  /**
   * Specifies the cell’s size and location within the row of a grid
   * @type string
   */
  gridRow?: ResponsiveValue<CSS.Property.GridRow>;
  /**
   * Specifies cell's size and location within a grid
   * @type string
   */
  gridArea?: ResponsiveValue<CSS.Property.GridArea>;
  /**
   * Sets the cell's background color
   * @type BackgroundColors
   */
  backgroundColor?: BackgroundColorProp;
}
