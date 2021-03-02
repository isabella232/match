import * as React from "react";
import * as PropTypes from "prop-types";
import { useUIDSeed } from "react-uid";
import { marginPropTypes } from "@twilio-labs/match-props";
import { useFormikContext } from "formik";
import {
  Label,
  HelpText,
  HelpTextVariant,
} from "@twilio-labs/match-primitives";
import { StyledCheckboxGroupWrapper, StyledCheckboxGroup } from "./styles";
import { CheckboxSize } from "./constants";
import type { CheckboxGroupProps } from "./types";

export const CheckboxGroup = React.forwardRef<
  HTMLFieldSetElement,
  CheckboxGroupProps
>(
  (
    {
      helper,
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
    const name = children[0].props.name;
    children.map((child) => {
      if (child.props.name != name) {
        console.warn(
          "[CheckboxGroup]: All Checkboxs within a group should use the same name"
        );
      }
    });
    const { touched, errors } = useFormikContext();
    const hasError = touched[name] && errors[name];

    const seed = useUIDSeed();

    const describedby: string[] = [];
    hasError && describedby.push(seed(`${name}_error`));
    Boolean(helper) && describedby.push(seed(`${name}_helper`));

    return (
      <StyledCheckboxGroupWrapper
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
        aria-describedby={describedby.join(" ")}
      >
        <Label
          id={seed(`${name}_label`)}
          disabled={Boolean(disabled)}
          required={Boolean(required)}
          as="legend"
          size={
            Boolean(size == CheckboxSize.NORMAL)
              ? LabelSize.NORMAL
              : LabelSize.SMALL
          }
        >
          {groupLabel}
        </Label>
        {Boolean(helper) && (
          <HelpText id={seed(`${name}_helper`)}>{helper}</HelpText>
        )}
        <StyledCheckboxGroup horizontal={horizontal}>
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
        </StyledCheckboxGroup>
        {hasError && (
          <HelpText id={seed(`${name}_error`)} variant={HelpTextVariant.ERROR}>
            {errors[name]}
          </HelpText>
        )}
      </StyledCheckboxGroupWrapper>
    );
  }
);

CheckboxGroup.displayName = "CheckboxGroup";

CheckboxGroup.propTypes = {
  ...marginPropTypes,
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  groupLabel: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(CheckboxSize)),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  helper: PropTypes.string,
  horizontal: PropTypes.bool,
  validate: PropTypes.func,
  noValidate: PropTypes.bool,
};
