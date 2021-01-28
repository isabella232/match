import * as React from "react";
import * as PropTypes from "prop-types";
import { marginPropTypes } from "@twilio-labs/match-props";
import { useUIDSeed } from "react-uid";
import { ErrorIcon } from "./error-icon";
import {
  StyledInput,
  StyledLabel,
  StyledHelper,
  StyledError,
  StyledRequired,
  StyledInputWrapper,
} from "./styles";
import { InputSize } from "./types";
import type { InputProps } from "./types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helper,
      size,
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
      onChange,
      ...props
    },
    ref
  ) => {
    const seed = useUIDSeed();
    const [error, setError] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof onChange === "function") onChange(e);
      const { validity, validationMessage } = e.currentTarget;
      if (validity.customError) {
        setError(validationMessage);
      } else if (validity.tooShort) {
        setError(
          `${label} must be at least ${e.currentTarget.minLength} characters long.`
        );
      } else {
        setError("");
      }
    };
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
          <StyledLabel
            id={seed(`${name}_label`)}
            htmlFor={seed(`${name}_input`)}
            inputDisabled={Boolean(disabled)}
          >
            {required && <StyledRequired />}
            {label}
          </StyledLabel>
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
          onChange={handleChange}
          {...props}
        />
        {Boolean(!error && helper) && (
          <StyledHelper id={seed(`${name}_message`)}>{helper}</StyledHelper>
        )}
        {Boolean(error) && (
          <StyledError id={seed(`${name}_message`)} role="alert">
            <ErrorIcon
              marginRight="scale7"
              size="medium"
              color="red60"
              title="Validation error"
            />
            {error}
          </StyledError>
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
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: "text",
  size: InputSize.NORMAL,
};

export { Input, InputSize };
export type { InputProps };
