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
} from "./styles";
import { InputSize } from "./types";
import type { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  label,
  helper,
  size,
  error,
  name,
  disabled,
  required,
  ...props
}) => {
  const seed = useUIDSeed();
  return (
    <div>
      {Boolean(label) && (
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
        id={seed(`${name}_input`)}
        name={name}
        aria-labelledby={Boolean(label) ? seed(`${name}_label`) : undefined}
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
    </div>
  );
};

Input.displayName = "Input";

Input.propTypes = {
  ...marginPropTypes,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "tel", "number", "password"]),
  size: PropTypes.oneOf(Object.values(InputSize)),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  helper: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  size: InputSize.NORMAL,
};

export { Input, InputSize };
export type { InputProps };
