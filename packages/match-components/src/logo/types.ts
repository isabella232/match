import { ColorOptions, CSSUnitProp } from "@twilio-labs/match-props";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * 'gray90', 'gray70', 'white'
   * @type Color
   */
  color?: ColorOptions;
  maxHeight?: CSSUnitProp;
}

export type ColorLogoProps = Omit<LogoProps, "color">;
