export enum AnchorVariant {
  PRIMARY = "primary",
  INVERSE = "inverse",
  TEXT = "text",
}

export type AnchorTarget = "_self" | "_blank" | "_parent" | "_top";

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: AnchorVariant;
  /** A URL to route to. */
  href: string;
  /** Defaults to '_blank' for external links */
  target?: AnchorTarget;
  /** Defaults to 'noreferrer noopener' for external links  */
  rel?: string;
  /** Removes the underline from the anchor  */
  noUnderline?: boolean;
}
