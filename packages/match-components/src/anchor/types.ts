export enum AnchorVariant {
  TEXT = "text",
  INVERSE = "inverse",
  NOUNDERLINE = "no underline",
  NOUNDERLINEINVERSE = "no undlerline inverse",
}

export interface AnchorProps {
  variant?: AnchorVariant;
  /** A URL to route to. */
  href?: string;
  target?: string;
  rel?: string;
}
