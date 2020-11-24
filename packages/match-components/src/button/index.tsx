import * as React from "react";
import * as PropTypes from "prop-types";
import { uid } from "react-uid";
import { StyledButton, StyledPrompt } from "./styles";
import { ButtonVariant, ButtonType, ButtonSize } from "./types";
import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  type,
  prompt,
  children,
  ...props
}) => {
  if (props.download && !props.href)
    console.warn("[Button]: Href must be provided for a download link.");

  return (
    <StyledButton
      forwardedAs={props.href ? "a" : undefined}
      type={!props.href ? type : undefined}
      {...props}
    >
      {Array.isArray(children)
        ? children.map((child) => {
            if (React.isValidElement(child))
              return React.cloneElement(child, { key: uid(child) });
            if (typeof child === "string") return child.trim();
          })
        : children}
      {prompt && <StyledPrompt />}
    </StyledButton>
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
  prompt: PropTypes.bool,
};

Button.defaultProps = {
  variant: ButtonVariant.PRIMARY,
  type: ButtonType.BUTTON,
  size: ButtonSize.NORMAL,
  disabled: false,
  fullWidth: false,
  download: false,
  prompt: false,
};

Button.displayName = "Button";

export { Button, ButtonVariant, ButtonType, ButtonSize };
export type { ButtonProps };
