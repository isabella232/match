import {
  ColorOptions,
  IconSizeProp,
  MarginProps,
} from "@twilio-labs/match-props";

export interface IconProps
  extends MarginProps,
    React.HTMLAttributes<HTMLSpanElement> {
  /**
   * 'white', 'baseRed', 'blue50', 'blue60', 'blue80', 'baseGreen', 'baseOrange', 'basePurple', 'gray80', 'gray90', 'gray100'
   * @type Color
   */
  color?: ColorOptions;
  /**
   * 'small', 'medium', 'base', 'large', 'xLarge'
   * @type IconSize
   */
  size?: IconSizeProp;
  /** Accessibility text provided to screenreaders. */
  title?: string;
  /** Determines if icon is decorative or informative. Decorative icon titles are not read by screenreaders. */
  decorative?: boolean;
}
