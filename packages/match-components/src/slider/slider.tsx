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

import { StyledSlider, StyledMinMax, StyledSliderWrapper } from "./styles";
import type { SliderProps } from "./types";

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      name,
      label,
      maxPlus,
      disabled,
      required,
      max,
      min,
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

      if (required && !Boolean(value)) {
        return "This field is required";
      }
    };

    const seed = useUIDSeed();
    const [field, meta] = useField({
      name,
      type: "range",
      validate,
      required,
      disabled,
      ...props,
    });
    const hasError = meta.touched && Boolean(meta.error);

    return (
      <StyledSliderWrapper
        margin={margin}
        marginY={marginY}
        marginX={marginX}
        marginRight={marginRight}
        marginLeft={marginLeft}
        marginBottom={marginBottom}
        marginTop={marginTop}
      >
        <Label
          id={seed(`${name}_label`)}
          htmlFor={seed(`${name}_input`)}
          disabled={Boolean(disabled)}
          required={Boolean(required)}
          size={LabelSize.NORMAL}
        >
          {label}
        </Label>
        <StyledSlider
          type="range"
          id={seed(`${name}_input`)}
          ref={mergedRefs}
          disabled={disabled}
          required={required}
          aria-labelledby={seed(`${name}_label`)}
          aria-describedby={hasError ? seed(`${name}_message`) : undefined}
          aria-invalid={hasError}
          aria-disabled={disabled}
          max={max}
          min={min}
          style={
            {
              "--max": max,
              "--val": field.value,
              "--min": min,
            } as React.CSSProperties
          }
          {...field}
          {...props}
        />
        <StyledMinMax>
          <span>{min.toLocaleString()}</span>
          <span>
            {max.toLocaleString()}
            {maxPlus ? "+" : ""}
          </span>
        </StyledMinMax>
        {hasError && (
          <HelpText
            id={seed(`${name}_message`)}
            variant={hasError ? HelpTextVariant.ERROR : undefined}
          >
            {meta.error}
          </HelpText>
        )}
      </StyledSliderWrapper>
    );
  }
);

Slider.displayName = "Slider";

Slider.propTypes = {
  ...marginPropTypes,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxPlus: PropTypes.bool,
  type: PropTypes.oneOf(["text", "email", "tel", "number", "url", "password"]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  validate: PropTypes.func,
  noValidate: PropTypes.bool,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
};
