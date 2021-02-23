import * as React from "react";
import * as PropTypes from "prop-types";
import { useUIDSeed } from "react-uid";
import { marginPropTypes } from "@twilio-labs/match-props";
import { useField, useFormikContext } from "formik";
import {
  Label,
  LabelSize,
  HelpText,
  HelpTextVariant,
} from "@twilio-labs/match-primitives";
import {
  StyledRadio,
  StyledRadioWrapper,
  HiddenRadio,
  StyledRadioLabel,
  StyledRadioAdditional,
  StyledRadioGroupWrapper,
  StyledRadioGroup,
  StyledRadioLabelWrapper,
} from "./styles";
import { RadioSize } from "./constants";
import type { RadioProps, RadioGroupProps } from "./types";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size,
      additional,
      error,
      required,
      name,
      label,
      value,
      disabled,
      checked,
      readOnly,
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
    console.log(field.value);
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
              aria-invalid={Boolean(error)}
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
  error: PropTypes.bool,
  checked: PropTypes.bool,
  noValidate: PropTypes.bool,
};

Radio.defaultProps = {
  size: RadioSize.NORMAL,
};

export const RadioGroup = React.forwardRef<
  HTMLFieldSetElement,
  RadioGroupProps
>(
  (
    {
      helper,
      error,
      name,
      required,
      disabled,
      groupLabel,
      children,
      size,
      vertical,
      readOnly,
      noValidate,
      margin,
      marginY,
      marginX,
      marginRight,
      marginLeft,
      marginBottom,
      marginTop,
    },
    ref
  ) => {
    const { touched, errors } = useFormikContext();
    const hasError = touched[name] && errors[name];

    const seed = useUIDSeed();
    return (
      <StyledRadioGroupWrapper
        margin={margin}
        marginY={marginY}
        marginX={marginX}
        marginRight={marginRight}
        marginLeft={marginLeft}
        marginBottom={marginBottom}
        marginTop={marginTop}
        name={name}
        ref={ref}
      >
        <Label
          id={seed(`${name}_label`)}
          disabled={Boolean(disabled)}
          required={Boolean(required)}
          as="legend"
          size={
            Boolean(size == RadioSize.NORMAL)
              ? LabelSize.NORMAL
              : LabelSize.SMALL
          }
        >
          {groupLabel}
        </Label>
        {Boolean(helper) && (
          <HelpText id={seed(`${name}_message`)}>{helper}</HelpText>
        )}
        <StyledRadioGroup vertical={vertical}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              disabled: disabled,
              size: size,
              readOnly: readOnly,
              error: Boolean(error),
              required: required,
              name: name,
              noValidate: noValidate,
            })
          )}
        </StyledRadioGroup>
        {hasError && (
          <HelpText id={seed(`${name}_error`)} variant={HelpTextVariant.ERROR}>
            {errors[name]}
          </HelpText>
        )}
      </StyledRadioGroupWrapper>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

RadioGroup.propTypes = {
  ...marginPropTypes,
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  groupLabel: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(RadioSize)),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.string,
  helper: PropTypes.string,
  vertical: PropTypes.bool,
  noValidate: PropTypes.bool,
};
