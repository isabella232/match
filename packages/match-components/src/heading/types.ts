import type { MarginProps } from "@twilio-labs/match-props";
import { HeadingVariant } from "./constants";

export interface HeadingProps
  extends MarginProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  variant: `${HeadingVariant}`;
  /**
   * Inverts text color for use with dark backgrounds.
   */
  inverse?: boolean;
  /**
   * The HTML tag to use if different from HeadingVariant.
   */
  as?: `${HeadingVariant}`;
  id?: string;
}
