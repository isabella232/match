import { MarginProps } from "@twilio-labs/match-props";

export enum HeadingVariant {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

/** asTags separate from HeadingVariant to allow future requested tags (e.g. div, p, etc.) */
export type asTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends MarginProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  variant: HeadingVariant;
  /**
   * Inverts text color for use with dark backgrounds.
   */
  inverse?: boolean;
  /**
   * The HTML tag to use if different from HeadingVariant.
   */
  as?: asTags;
  id?: string;
}
