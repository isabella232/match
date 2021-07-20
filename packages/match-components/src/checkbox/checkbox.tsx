import { useField } from "formik";
import * as PropTypes from "prop-types";
import * as React from "react";
import { useUIDSeed } from "react-uid";

import { Label, LabelSize } from "@twilio-labs/match-primitives";
import { marginPropTypes } from "@twilio-labs/match-props";

import { CheckmarkIcon } from "./checkmark-icon";
import { CheckboxSize } from "./constants";
import {
  StyledCheckbox,
  StyledCheckboxWrapper,
  HiddenInput,
  StyledCheckboxLabel,
} from "./styles";
import type { CheckboxProps } from "./types";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name,
      value,
      disabled,
      readOnly,
      required,
      size,
      label,
      additional,
      validate: validateOverride,
      noValidate,
      isGrouped,
      onClick,
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
    const validate = (currentValue: Array<string>) => {
      if (noValidate) return;
      if (validateOverride) return validateOverride(currentValue);
      if (
        required &&
        (currentValue === undefined || currentValue.length === 0)
      ) {
        return "This field is required";
      }
    };
    const [field, meta] = useField({
      name,
      disabled,
      value,
      type: "checkbox",
      validate,
      ...props,
    });
    const hasError = meta.touched && Boolean(meta.error);

    return (
      <StyledCheckboxWrapper
        size={size}
        margin={margin}
        marginY={marginY}
        marginX={marginX}
        marginRight={marginRight}
        marginLeft={marginLeft}
        marginBottom={marginBottom}
        marginTop={marginTop}
      >
        <StyledCheckbox
          disabled={disabled}
          readOnly={readOnly}
          hasError={hasError}
          checked={field.checked}
          size={size}
        >
          {field.checked && <CheckmarkIcon />}
          <HiddenInput
            ref={ref}
            tabIndex={0}
            id={seed(`${name}_input`)}
            type="checkbox"
            aria-disabled={disabled}
            aria-invalid={hasError}
            aria-labelledby={seed(`${name}_label`)}
            aria-describedby={
              Boolean(additional) ? seed(`${name}_additional`) : undefined
            }
            onClick={onClick || ((event) => event.currentTarget.focus())}
            {...field}
            {...props}
          />
        </StyledCheckbox>
        <StyledCheckboxLabel size={size}>
          {label && (
            <Label
              disabled={Boolean(disabled)}
              required={Boolean(required) && !Boolean(isGrouped)}
              requiredStyleAtEnd={true}
              size={
                Boolean(size == CheckboxSize.NORMAL)
                  ? LabelSize.NORMAL
                  : LabelSize.SMALL
              }
              id={seed(`${name}_label`)}
              htmlFor={seed(`${name}_input`)}
            >
              {label}
            </Label>
          )}
          {additional && (
            <span id={seed(`${name}_additional`)}>{additional}</span>
          )}
        </StyledCheckboxLabel>
      </StyledCheckboxWrapper>
    );
  }
);

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
  ...marginPropTypes,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.values(CheckboxSize)),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  additional: PropTypes.string,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  size: CheckboxSize.NORMAL,
};
