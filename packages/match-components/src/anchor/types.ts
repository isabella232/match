export enum AnchorVariant {
  TEXT = "text",
  INVERSE = "inverse",
}

export enum AnchorTarget {
  SELF = "_self",
  BLANK = "_blank",
  PARENT = "_parent",
  TOP = "_top",
}

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: AnchorVariant;
  /** A URL to route to. */
  href?: string;
  target?: AnchorTarget;
  rel?: string;
  noUnderline?: boolean;
}
