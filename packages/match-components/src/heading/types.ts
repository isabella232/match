import { MarginProps } from "@twilio-labs/match-props";

export enum HeadingVariant {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export interface HeadingProps
  extends MarginProps,
    React.HTMLAttributes<HTMLHeadingElement> {
  variant: HeadingVariant;
  /**
   * The HTML tag to use if different from HeadingVariant.
   */
  as?: HeadingVariant;
  id?: string;
}