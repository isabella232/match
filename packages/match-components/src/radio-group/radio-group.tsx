import * as React from "react";
import * as PropTypes from "prop-types";
import { useUIDSeed } from "react-uid";
import { marginPropTypes } from "@twilio-labs/match-props";
import { useFormikContext } from "formik";
import {
  Label,
  LabelSize,
  HelpText,
  HelpTextVariant,
} from "@twilio-labs/match-primitives";
import { StyledRadioGroupWrapper, StyledRadioGroup } from "./styles";
import { RadioSize } from "./constants";
import type { RadioGroupProps } from "./types";

export const RadioGroup = React.forwardRef<
  HTMLFieldSetElement,
  RadioGroupProps
>(
  (
    {
      helper,
      name,
      required,
      disabled,
      groupLabel,
      children,
      size,
      horizontal,
      readOnly,
      validate,
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
        disabled={disabled}
        aria-describedby={hasError ? seed(`${name}_error`) : undefined}
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
        <StyledRadioGroup horizontal={horizontal}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              disabled: disabled,
              size: size,
              readOnly: readOnly,
              required: required,
              name: name,
              validate: validate,
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
  helper: PropTypes.string,
  horizontal: PropTypes.bool,
  validate: PropTypes.func,
  noValidate: PropTypes.bool,
};
