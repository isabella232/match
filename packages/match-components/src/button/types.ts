import { MarginProps, IconComponentProp } from "@twilio-labs/match-props";

import { ButtonVariant, ButtonSize, ButtonType } from "./constants";

export interface ButtonProps
  extends MarginProps,
    React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: `${ButtonVariant}`;
  type?: `${ButtonType}`;
  size?: `${ButtonSize}`;
  icon?: IconComponentProp;
  /** Should the button include an animated prompt? */
  prompt?: boolean;
  /** A URL to route to. The button's 'type' attribute will be ignored. */
  href?: string;
  /** Prevent actions from firing on the Button. */
  disabled?: boolean;
  /** Sets the button width to 100% of the parent container. */
  fullWidth?: boolean;
  /** Should the link trigger a download dialog? Must be used with the 'href' attribute. */
  download?: boolean;
}
