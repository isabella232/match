import * as React from "react";
import * as PropTypes from "prop-types";
import { useUIDSeed } from "react-uid";
import { marginPropTypes } from "@twilio-labs/match-props";
import { useField } from "formik";
import {
  StyledRadio,
  StyledRadioWrapper,
  HiddenRadio,
  StyledRadioLabel,
  StyledRadioAdditional,
  StyledRadioLabelWrapper,
} from "./styles";
import { RadioSize } from "./constants";
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
      checked,
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
        <StyledRadioLabelWrapper>
          <div>
            <HiddenRadio
              type="radio"
              ref={ref}
              id={seed(`${name}_input`)}
              aria-labelledby={seed(`${name}_label`)}
              aria-describedby={
                Boolean(additional) ? seed(`${name}_message`) : undefined
              }
              label={label}
              aria-invalid={hasError}
              aria-disabled={disabled}
              checked={checked}
              disabled={Boolean(disabled || readOnly)}
              readOnly={readOnly}
              radioSize={size}
              {...field}
              {...props}
            />
            <StyledRadio hasError={hasError} />
          </div>

          <StyledRadioLabel>{label}</StyledRadioLabel>
        </StyledRadioLabelWrapper>
        {Boolean(additional) && (
          <StyledRadioAdditional>{additional}</StyledRadioAdditional>
        )}
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
  checked: PropTypes.bool,
  validate: PropTypes.func,
  noValidate: PropTypes.bool,
};

Radio.defaultProps = {
  size: RadioSize.NORMAL,
};
