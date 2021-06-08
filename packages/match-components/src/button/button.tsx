import * as PropTypes from "prop-types";
import * as React from "react";
import { marginPropTypes } from "@twilio-labs/match-props";
import { ButtonVariant, ButtonSize, ButtonType } from "./constants";
import { StyledButton, StyledPrompt } from "./styles";
import type { ButtonProps } from "./types";

const getIconSize = (size: ButtonSize): string | undefined => {
  switch (size) {
    case ButtonSize.NORMAL:
      return "medium";
    case ButtonSize.SMALL:
      return "small";
    case ButtonSize.ICON:
      return "large";
  }
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, prompt, children, size, ...props }, ref) => {
    if (props.download && !props.href) {
      console.warn("[Button]: Href must be provided for a download link.");
    }

    return (
      <StyledButton
        ref={ref}
        forwardedAs={props.href ? "a" : "button"}
        type={!props.href ? type : undefined}
        size={size}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (typeof child === "string") {
            return child.trim();
          }
          if (
            React.isValidElement(child) &&
            child.type["displayName"].endsWith("Icon")
          ) {
            return React.cloneElement(child, {
              size: getIconSize(size as ButtonSize),
              color: "currentColor",
              marginLeft: size !== ButtonSize.ICON ? "0.5em" : undefined,
            });
          }
          return child;
        })}
        {prompt && <StyledPrompt />}
      </StyledButton>
    );
  }
);

Button.propTypes = {
  ...marginPropTypes,
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
