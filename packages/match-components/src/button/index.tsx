import * as React from "react";
import * as PropTypes from "prop-types";
import { StyledButton } from "./styles";
import { ButtonVariant, ButtonType, ButtonSize } from "./types";
import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ type, ...props }) => {
  if (props.download && !props.href)
    console.warn("[Button]: Href must be provided for a download link.");

  return (
    <StyledButton
      forwardedAs={props.href ? "a" : undefined}
      type={!props.href ? type : undefined}
      {...props}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(ButtonVariant)),
  type: PropTypes.oneOf(Object.values(ButtonType)),
  size: PropTypes.oneOf(Object.values(ButtonSize)),
  href: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  download: PropTypes.bool,
};

Button.defaultProps = {
  variant: ButtonVariant.PRIMARY,
  type: ButtonType.BUTTON,
  size: ButtonSize.NORMAL,
  disabled: false,
  fullWidth: false,
  download: false,
};

Button.displayName = "Button";

export { Button, ButtonVariant, ButtonType, ButtonSize };
export type { ButtonProps };
