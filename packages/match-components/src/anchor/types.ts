import { MarginProps, IconComponentProp } from "@twilio-labs/match-props";

import { AnchorVariant, AnchorTarget } from "./constants";

export interface AnchorProps
  extends MarginProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: `${AnchorVariant}`;
  icon?: IconComponentProp;
  /** A URL to route to. */
  href: string;
  /** Defaults to '_blank' for external links */
  target?: `${AnchorTarget}`;
  /** Defaults to 'noreferrer noopener' for external links  */
  rel?: string;
  /** Removes the underline from the anchor  */
  noUnderline?: boolean;
}
