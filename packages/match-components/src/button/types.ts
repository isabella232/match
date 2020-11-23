export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  INVERSE = "inverse",
}

export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
}

export enum ButtonSize {
  NORMAL = "normal",
  SMALL = "small",
}

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: ButtonVariant;
  type?: ButtonType;
  size?: ButtonSize;
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
