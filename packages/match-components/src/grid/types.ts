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
  gridGap?: SpaceProp;
  gridRowGap?: SpaceProp;
  gridColumnGap?: SpaceProp;
  gridColumn?: ResponsiveValue<CSS.Property.GridColumn>;
  gridAutoFlow?: ResponsiveValue<CSS.Property.GridAutoFlow>;
  gridAutoRows?: ResponsiveValue<CSS.Property.GridAutoRows>;
  gridAutoColumns?: ResponsiveValue<CSS.Property.GridAutoColumns>;
  gridTemplateRows?: ResponsiveValue<CSS.Property.GridTemplateRows>;
  gridTemplateColumns?: ResponsiveValue<CSS.Property.GridTemplateColumns>;
  gridTemplateAreas?: ResponsiveValue<CSS.Property.GridTemplateAreas>;
  alignItems?: ResponsiveValue<CSS.Property.AlignItems>;
  alignContent?: ResponsiveValue<CSS.Property.AlignContent>;
  justifyItems?: ResponsiveValue<CSS.Property.JustifyItems>;
  justifyContent?: ResponsiveValue<CSS.Property.JustifyContent>;
}

export interface CellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PaddingProps,
    MarginProps {
  alignSelf?: ResponsiveValue<CSS.Property.AlignSelf>;
  justifySelf?: ResponsiveValue<CSS.Property.JustifySelf>;
  order?: ResponsiveValue<CSS.Property.Order>;
  gridColumn?: ResponsiveValue<CSS.Property.GridColumn>;
  gridRow?: ResponsiveValue<CSS.Property.GridRow>;
  gridArea?: ResponsiveValue<CSS.Property.GridArea>;
  backgroundColor?: BackgroundColorProp;
}
