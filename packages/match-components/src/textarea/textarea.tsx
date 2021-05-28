import * as React from "react";
import * as PropTypes from "prop-types";
import { useUIDSeed } from "react-uid";
import { useField } from "formik";
import { marginPropTypes } from "@twilio-labs/match-props";
import {
  Label,
  LabelSize,
  HelpText,
  HelpTextVariant,
} from "@twilio-labs/match-primitives";
import { useMergedRefs } from "@twilio-labs/match-hooks";
import {
  StyledTextarea,
  StyledShadowTextarea,
  StyledTextareaContainer,
  StyledTextareaWrapper,
} from "./styles";
import { TextareaResizeOptions } from "./constants";
import type { TextareaProps } from "./types";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      additional,
      name,
      disabled,
      required,
      hideLabel,
      rows = 3,
      resize,
      validate: validateOverride,
      noValidate,
      minLength,
      maxLength,
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
    const innerRef = React.useRef<HTMLTextAreaElement>(null);
    const mergedRef = useMergedRefs<HTMLTextAreaElement>(innerRef, ref);
    const [height, setHeight] = React.useState<number>(0);
    const shadowRef = React.useRef<HTMLTextAreaElement>(null);

    const resizeTextarea = () => {
      if (shadowRef.current) {
        setHeight(shadowRef.current.scrollHeight);
      }
    };

    const validate = (value: string) => {
      if (noValidate || !innerRef.current) return;

      if (validateOverride) return validateOverride(value);

      const { validity } = innerRef.current;

      if (validity.valueMissing) {
        return "This field is required";
      }

      if (validity.tooShort) {
        return `Must be at least ${minLength} characters long`;
      }

      if (validity.tooLong) {
        return `Must be less than ${maxLength} characters long`;
      }
    };

    const seed = useUIDSeed();
    const [field, meta] = useField({
      name,
      as: "textarea",
      validate,
      disabled,
      required,
      minLength,
      maxLength,
      ...props,
    });

    const hasError = meta.touched && Boolean(meta.error);
    const hasAdditional = Boolean(additional);

    React.useEffect(() => {
      if (resize === TextareaResizeOptions.SMART) {
        window.addEventListener("resize", resizeTextarea);
      } else {
        setHeight(0);
        window.removeEventListener("resize", resizeTextarea);
      }
      return () => window.removeEventListener("resize", resizeTextarea);
    }, [resize]);

    React.useEffect(() => {
      if (resize === TextareaResizeOptions.SMART) {
        resizeTextarea();
      }
    }, [resize, field.value]);

    return (
      <StyledTextareaWrapper
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
            size={LabelSize.SMALL}
          >
            {label}
          </Label>
        )}
        <StyledTextareaContainer
          hasError={hasError}
          disabled={Boolean(disabled)}
        >
          <StyledTextarea
            id={seed(`${name}_input`)}
            ref={mergedRef}
            disabled={disabled}
            required={required}
            rows={rows}
            resize={resize}
            minLength={minLength}
            maxLength={maxLength}
            aria-label={hideLabel ? label : undefined}
            aria-labelledby={!hideLabel ? seed(`${name}_label`) : undefined}
            aria-describedby={
              hasAdditional || hasError ? seed(`${name}_message`) : undefined
            }
            aria-invalid={hasError}
            aria-disabled={disabled}
            style={{ height: Boolean(height) ? `${height}px` : undefined }}
            {...field}
            {...props}
          />
          {resize === TextareaResizeOptions.SMART && (
            <StyledShadowTextarea
              disabled
              aria-hidden={true}
              tabIndex={-1}
              ref={shadowRef}
              rows={rows}
              value={field.value}
            />
          )}
        </StyledTextareaContainer>
        {(hasAdditional || hasError) && (
          <HelpText
            id={seed(`${name}_message`)}
            variant={hasError ? HelpTextVariant.ERROR : undefined}
          >
            {hasError ? meta.error : additional}
          </HelpText>
        )}
      </StyledTextareaWrapper>
    );
  }
);

Textarea.displayName = "Textarea";

Textarea.propTypes = {
  ...marginPropTypes,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  additional: PropTypes.string,
  rows: PropTypes.oneOf([3, 4, 5, 6, 7, 8, 9, 10]),
  resize: PropTypes.oneOf(Object.values(TextareaResizeOptions)),
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  validate: PropTypes.func,
  noValidate: PropTypes.bool,
};

Textarea.defaultProps = {
  rows: 3,
  resize: TextareaResizeOptions.MANUAL,
};
