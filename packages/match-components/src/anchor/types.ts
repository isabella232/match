export enum AnchorVariant {
  PRIMARY = "primary",
  INVERSE = "inverse",
  TEXT = "text",
}

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: AnchorVariant;
  /** A URL to route to. */
  href?: string;
  //target?: AnchorTarget;
  target?: string;
  rel?: string;
  noUnderline?: boolean;
}
