import * as React from "react";
import * as PropTypes from "prop-types";
import { StyledButton } from "./styles";
import { ButtonVariant, ButtonType, ButtonSize, ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ type, ...props }) => {
  if (props.download && !props.href)
    console.warn("href must be provided for a download link");

  return (
    <StyledButton
      as={props.href ? "a" : undefined}
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

export { Button, ButtonVariant, ButtonType, ButtonSize, ButtonProps };
