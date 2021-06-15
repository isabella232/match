import * as PropTypes from "prop-types";
import * as React from "react";
import { marginPropTypes, IconSizeProp } from "@twilio-labs/match-props";
import { ButtonVariant, ButtonSize, ButtonType } from "./constants";
import { StyledButton, StyledPrompt } from "./styles";
import type { ButtonProps } from "./types";

const getIconSize = (size: ButtonSize): IconSizeProp => {
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
  ({ type, prompt, children, size, icon: Icon, ...props }, ref) => {
    if (props.download && !props.href) {
      console.warn("[Button]: Href must be provided for a download link.");
    }

    if (
      size === ButtonSize.ICON &&
      !Boolean(Icon) &&
      typeof children !== "string"
    ) {
      console.warn(
        "[Button]: An icon component and child string must be provided for icon only buttons."
      );
    }

    return (
      <StyledButton
        ref={ref}
        forwardedAs={props.href ? "a" : "button"}
        type={!props.href ? type : undefined}
        size={size}
        {...props}
      >
        {size !== ButtonSize.ICON && children}
        {Icon && (
          <Icon
            size={getIconSize(size as ButtonSize)}
            color="currentColor"
            marginLeft={size !== ButtonSize.ICON ? "0.5em" : undefined}
            decorative={
              size !== ButtonSize.ICON || typeof children !== "string"
            }
            title={
              size === ButtonSize.ICON && typeof children === "string"
                ? children
                : undefined
            }
          />
        )}
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
  icon: PropTypes.func,
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
