import { useFormikContext } from "formik";
import * as PropTypes from "prop-types";
import * as React from "react";
import { useUIDSeed } from "react-uid";
import {
  Label,
  LabelSize,
  HelpText,
  HelpTextVariant,
} from "@twilio-labs/match-primitives";
import { marginPropTypes } from "@twilio-labs/match-props";
import { RadioSize } from "./constants";
import { StyledRadioGroupWrapper, StyledRadioGroup } from "./styles";
import type { RadioGroupProps } from "./types";

export const RadioGroup = React.forwardRef<
  HTMLFieldSetElement,
  RadioGroupProps
>(
  (
    {
      additional,
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
    const name = React.useMemo(() => {
      const childrenNames = [
        ...new Set(
          React.Children.toArray(children)
            .map((child) => React.isValidElement(child) && child.props.name)
            .filter(Boolean)
        ),
      ];

      if (childrenNames.length > 1) {
        console.warn(
          "[RadioGroup]: All Radios within a group should use the same name"
        );
      }

      return childrenNames[0];
    }, [children]);
    const { touched, errors } = useFormikContext();
    const hasError = touched[name] && errors[name];

    const seed = useUIDSeed();

    const describedby: string[] = [];
    hasError && describedby.push(seed(`${name}_error`));
    Boolean(additional) && describedby.push(seed(`${name}_additional`));

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
        aria-describedby={describedby.join(" ")}
        aria-labelledby={seed(`${name}_label`)}
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
        {Boolean(additional) && (
          <HelpText id={seed(`${name}_additional`)}>{additional}</HelpText>
        )}
        <StyledRadioGroup horizontal={horizontal} hasError={hasError}>
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
  groupLabel: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(RadioSize)),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  additional: PropTypes.string,
  horizontal: PropTypes.bool,
  validate: PropTypes.func,
  noValidate: PropTypes.bool,
};

RadioGroup.defaultProps = {
  size: RadioSize.NORMAL,
};
