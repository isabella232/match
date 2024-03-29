import { useField } from "formik";
import * as PropTypes from "prop-types";
import * as React from "react";
import { useUIDSeed } from "react-uid";

import { useMergedRefs } from "@twilio-labs/match-hooks";
import {
  Label,
  LabelSize,
  HelpText,
  HelpTextVariant,
} from "@twilio-labs/match-primitives";
import { marginPropTypes } from "@twilio-labs/match-props";

import { InputSize } from "./constants";
import {
  StyledInput,
  StyledInputContainer,
  StyledInputWrapper,
} from "./styles";
import type { InputProps } from "./types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      type,
      label,
      hideLabel,
      additional,
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
    const innerRef = React.useRef<HTMLInputElement>(null);
    const mergedRefs = useMergedRefs<HTMLInputElement>(innerRef, ref);

    const validate = (value: string) => {
      if (noValidate || !innerRef.current) return;

      if (validateOverride) return validateOverride(value);

      const { validity } = innerRef.current;

      if (required && !Boolean(value)) {
        return "This field is required";
      }

      if (minLength && value && value.length < minLength) {
        return `Must be at least ${minLength} characters long`;
      }

      if (maxLength && value && value.length > maxLength) {
        return `Must be less than ${maxLength} characters long`;
      }

      if (validity.typeMismatch && type === "email") {
        return "Must be a valid email";
      }

      if (validity.typeMismatch && type === "url") {
        return "Must be a valid URL";
      }
    };

    const seed = useUIDSeed();
    const [field, meta] = useField({
      name,
      type,
      validate,
      required,
      disabled,
      minLength,
      maxLength,
      ...props,
    });
    const hasError = meta.touched && Boolean(meta.error);
    const hasAdditional = Boolean(additional);

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
            size={LabelSize.NORMAL}
          >
            {label}
          </Label>
        )}
        <StyledInputContainer hasError={hasError} disabled={Boolean(disabled)}>
          <StyledInput
            id={seed(`${name}_input`)}
            ref={mergedRefs}
            type={type}
            disabled={disabled}
            required={required}
            inputSize={size}
            minLength={minLength}
            maxLength={maxLength}
            aria-label={hideLabel ? label : undefined}
            aria-labelledby={!hideLabel ? seed(`${name}_label`) : undefined}
            aria-describedby={
              hasAdditional || hasError ? seed(`${name}_message`) : undefined
            }
            aria-invalid={hasError}
            aria-disabled={disabled}
            {...field}
            {...props}
          />
        </StyledInputContainer>
        {(hasAdditional || hasError) && (
          <HelpText
            id={seed(`${name}_message`)}
            variant={hasError ? HelpTextVariant.ERROR : undefined}
          >
            {hasError ? meta.error : additional}
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
  additional: PropTypes.string,
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
