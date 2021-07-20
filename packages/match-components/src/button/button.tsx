import * as PropTypes from "prop-types";
import * as React from "react";

import { marginPropTypes, IconSizeOptions } from "@twilio-labs/match-props";

import { ButtonVariant, ButtonSize, ButtonType } from "./constants";
import { StyledButton, StyledPrompt } from "./styles";
import type { ButtonProps } from "./types";

const iconSizes: { [size: string]: IconSizeOptions } = {
  [ButtonSize.NORMAL]: "medium",
  [ButtonSize.SMALL]: "small",
  [ButtonSize.ICON]: "large",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, prompt, children, size, icon: Icon, ...props }, ref) => {
    if (
      size === ButtonSize.ICON &&
      Boolean(Icon) &&
      typeof children !== "string"
    ) {
      console.warn(
        "[Button]: An icon component and child string must be provided for icon only buttons."
      );
    }

    return (
      <StyledButton
        ref={ref}
        forwardedAs={Boolean(props.href) ? "a" : "button"}
        type={!Boolean(props.href) ? type : undefined}
        size={size}
        {...props}
      >
        {size !== ButtonSize.ICON && children}
        {Icon && (
          <Icon
            size={size && iconSizes[size]}
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
