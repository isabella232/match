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
  ICON = "icon",
}

export interface ButtonProps {
  variant?: ButtonVariant;
  type?: ButtonType;
  size?: ButtonSize;
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  download?: boolean;
}
