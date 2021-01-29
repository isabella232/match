import * as React from "react";
import * as PropTypes from "prop-types";
import { useUIDSeed } from "react-uid";
import { marginPropTypes } from "@twilio-labs/match-props";
import {
  Label,
  HelpText,
  HelpTextVariant,
} from "@twilio-labs/match-primitives";
import { StyledInput, StyledInputWrapper } from "./styles";
import { InputSize } from "./constants";
import type { InputProps } from "./types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helper,
      size,
      error,
      name,
      disabled,
      required,
      hideLabel,
      margin,
      marginY,
      marginX,
      marginRight,
      marginLeft,
      marginBottom,
      marginTop,
      ...props
    },
    ref
  ) => {
    const seed = useUIDSeed();
    return (
      <StyledInputWrapper
        margin={margin}
        marginY={marginY}
        marginX={marginX}
        marginRight={marginRight}
        marginLeft={marginLeft}
        marginBottom={marginBottom}
        marginTop={marginTop}
      >
        {!hideLabel && (
          <Label
            id={seed(`${name}_label`)}
            htmlFor={seed(`${name}_input`)}
            disabled={Boolean(disabled)}
            required={Boolean(required)}
          >
            {label}
          </Label>
        )}
        <StyledInput
          ref={ref}
          id={seed(`${name}_input`)}
          name={name}
          aria-label={hideLabel ? label : undefined}
          aria-labelledby={!hideLabel ? seed(`${name}_label`) : undefined}
          aria-describedby={
            Boolean(helper || error) ? seed(`${name}_message`) : undefined
          }
          aria-invalid={Boolean(error)}
          aria-disabled={disabled}
          disabled={disabled}
          required={required}
          inputSize={size}
          {...props}
        />
        {Boolean(helper || error) && (
          <HelpText
            id={seed(`${name}_message`)}
            variant={Boolean(error) ? HelpTextVariant.ERROR : undefined}
          >
            {Boolean(error) ? error : helper}
          </HelpText>
        )}
      </StyledInputWrapper>
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  ...marginPropTypes,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "tel", "number", "url", "password"]),
  size: PropTypes.oneOf(Object.values(InputSize)),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  helper: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  size: InputSize.NORMAL,
};
