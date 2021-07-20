import { useField } from "formik";
import * as PropTypes from "prop-types";
import * as React from "react";
import { useUIDSeed } from "react-uid";

import { marginPropTypes } from "@twilio-labs/match-props";

import { RadioSize } from "./constants";
import {
  StyledRadio,
  StyledRadioWrapper,
  HiddenRadio,
  StyledRadioLabel,
  StyledRadioAdditional,
  StyledRadioTextWrapper,
} from "./styles";
import type { RadioProps } from "./types";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size,
      additional,
      required,
      name,
      label,
      value,
      disabled,
      readOnly,
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
    const seed = useUIDSeed();
    const validate = (value: string) => {
      if (noValidate) return;

      if (validateOverride) return validateOverride(value);

      if (required && !value) {
        return "This field is required";
      }
    };
    const [field, meta] = useField({
      name,
      disabled,
      value,
      type: "radio",
      validate,
      ...props,
    });
    const hasError = meta.touched && Boolean(meta.error);
    return (
      <StyledRadioWrapper
        margin={margin}
        marginY={marginY}
        marginX={marginX}
        marginRight={marginRight}
        marginLeft={marginLeft}
        marginBottom={marginBottom}
        marginTop={marginTop}
        radioSize={size}
      >
        <div>
          <StyledRadio
            hasError={hasError}
            disabled={disabled}
            readOnly={readOnly}
            checked={field.checked}
            radioSize={size}
          >
            <HiddenRadio
              type="radio"
              ref={ref}
              id={seed(`${name}_input`)}
              aria-labelledby={seed(`${name}_label`)}
              aria-describedby={
                Boolean(additional) ? seed(`${name}_additional`) : undefined
              }
              aria-invalid={hasError}
              aria-disabled={disabled}
              disabled={Boolean(disabled || readOnly)}
              {...field}
              {...props}
            />
          </StyledRadio>
        </div>
        <StyledRadioTextWrapper>
          <StyledRadioLabel
            id={seed(`${name}_label`)}
            htmlFor={seed(`${name}_input`)}
          >
            {label}
          </StyledRadioLabel>
          {Boolean(additional) && (
            <StyledRadioAdditional id={seed(`${name}_additional`)}>
              {additional}
            </StyledRadioAdditional>
          )}
        </StyledRadioTextWrapper>
      </StyledRadioWrapper>
    );
  }
);

Radio.displayName = "Radio";

Radio.propTypes = {
  ...marginPropTypes,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(RadioSize)),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  additional: PropTypes.string,
  validate: PropTypes.func,
  noValidate: PropTypes.bool,
};

Radio.defaultProps = {
  size: RadioSize.NORMAL,
};
