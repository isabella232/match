import * as React from "react";
import * as PropTypes from "prop-types";
import { useUIDSeed } from "react-uid";
import { marginPropTypes } from "@twilio-labs/match-props";
import {
  Label,
  HelpText,
  HelpTextVariant,
} from "@twilio-labs/match-primitives";
import { useField } from "formik";
import { StyledInput, StyledInputWrapper } from "./styles";
import { InputSize } from "./constants";
import type { InputProps } from "./types";

/* eslint-disable-next-line unicorn/better-regex */
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      type,
      label,
      hideLabel,
      helper,
      size,
      disabled,
      required,
      minLength,
      maxLength,
      validate: validateOverride,
      noValidate,
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
    const validate = (value: string) => {
      if (noValidate) return;
      if (validateOverride) return validateOverride(value);
      if (required && !Boolean(value)) {
        return "This field is required";
      }
      if (minLength && minLength > value.length) {
        return `Must be at least ${minLength} characters long`;
      }
      if (maxLength && maxLength < value.length) {
        return `Must be less than ${maxLength} characters long`;
      }
      if (type === "email" && !emailRegEx.test(value)) {
        return "Must be a valid email";
      }
    };

    const seed = useUIDSeed();
    const [field, meta] = useField({
      name,
      type,
      validate,
      required,
      disabled,
      ...props,
    });
    const hasError = meta.touched && Boolean(meta.error);
    const hasHelper = Boolean(helper);

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
          aria-label={hideLabel ? label : undefined}
          aria-labelledby={!hideLabel ? seed(`${name}_label`) : undefined}
          aria-describedby={
            hasHelper || hasError ? seed(`${name}_message`) : undefined
          }
          aria-invalid={hasError}
          aria-disabled={disabled}
          disabled={disabled}
          required={required}
          inputSize={size}
          {...field}
          {...props}
        />
        {(hasHelper || hasError) && (
          <HelpText
            id={seed(`${name}_message`)}
            variant={hasError ? HelpTextVariant.ERROR : undefined}
          >
            {hasError ? meta.error : helper}
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
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  validate: PropTypes.func,
  noValidate: PropTypes.bool,
};

Input.defaultProps = {
  type: "text",
  size: InputSize.NORMAL,
};
