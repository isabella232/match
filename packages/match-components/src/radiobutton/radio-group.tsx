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
