import * as PropTypes from "prop-types";
import * as React from "react";
import { useField } from "formik";
import { useUIDSeed } from "react-uid";

import {
  HelpText,
  HelpTextVariant,
  Label,
  LabelSize,
} from "@twilio-labs/match-primitives";
import { marginPropTypes } from "@twilio-labs/match-props";
import { useMergedRefs } from "@twilio-labs/match-hooks";

import type { SelectProps } from "./types";
import {
  StyledSelect,
  StyledSelectContainer,
  StyledSelectWrapper,
} from "./styles";
import { SelectSize } from "./constants";

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      name,
      label,
      hideLabel,
      helperText,
      size,
      disabled,
      required,
      placeholder,
      options,
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
    const innerRef = React.useRef<HTMLSelectElement>(null);
    const mergedRefs = useMergedRefs<HTMLSelectElement>(innerRef, ref);

    const validate = (value: string) => {
      if (noValidate || !innerRef.current) return;

      if (validateOverride) return validateOverride(value);

      if (required && !Boolean(value)) {
        return "This field is required";
      }
    };

    const seed = useUIDSeed();
    const [field, meta] = useField({
      name,
      validate,
      required,
      disabled,
      ...props,
    });
    const hasError = meta.touched && Boolean(meta.error);
    const hasAdditional = Boolean(helperText);

    return (
      <StyledSelectWrapper
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
            htmlFor={seed(`${name}_select`)}
            disabled={Boolean(disabled)}
            required={Boolean(required)}
            size={LabelSize.NORMAL}
          >
            {label}
          </Label>
        )}
        <StyledSelectContainer hasError={hasError} disabled={Boolean(disabled)}>
          <StyledSelect
            id={seed(`${name}_select`)}
            ref={mergedRefs}
            disabled={disabled}
            required={required}
            inputSize={size}
            aria-label={hideLabel ? label : undefined}
            aria-labelledby={!hideLabel ? seed(`${name}_label`) : undefined}
            aria-describedby={
              hasAdditional || hasError ? seed(`${name}_message`) : undefined
            }
            aria-invalid={hasError}
            aria-disabled={disabled}
            {...field}
            {...props}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option, key) => {
              return (
                <option value={option.value} key={key}>
                  {option.label}
                </option>
              );
            })}
          </StyledSelect>
        </StyledSelectContainer>
        {(hasAdditional || hasError) && (
          <HelpText
            id={seed(`${name}_message`)}
            variant={hasError ? HelpTextVariant.ERROR : undefined}
          >
            {hasError ? meta.error : helperText}
          </HelpText>
        )}
      </StyledSelectWrapper>
    );
  }
);

Select.displayName = "Select";

Select.propTypes = {
  ...marginPropTypes,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["single", "multiple"]),
  size: PropTypes.oneOf(Object.values(SelectSize)),
  options: PropTypes.array.isRequired,
};

Select.defaultProps = {
  size: SelectSize.NORMAL,
};
