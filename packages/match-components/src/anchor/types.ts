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
  target?: AnchorTarget;
  rel?: string;
  noUnderline?: boolean;
}
