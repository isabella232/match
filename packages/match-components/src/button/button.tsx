import * as React from "react";
import * as PropTypes from "prop-types";
import { StyledButton, StyledPrompt } from "./styles";
import { ButtonVariant, ButtonSize, ButtonType } from "./constants";
import type { ButtonProps } from "./types";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, prompt, children, ...props }, ref) => {
    if (props.download && !props.href) {
      console.warn("[Button]: Href must be provided for a download link.");
    }

    return (
      <StyledButton
        ref={ref}
        forwardedAs={props.href ? "a" : "button"}
        type={!props.href ? type : undefined}
        {...props}
      >
        {React.Children.map(children, (child) =>
          typeof child === "string" ? child.trim() : child
        )}
        {prompt && <StyledPrompt />}
      </StyledButton>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
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
  size: ButtonSize.NORMAL,
  disabled: false,
  fullWidth: false,
  download: false,
  prompt: false,
};

Button.displayName = "Button";
