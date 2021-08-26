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

import { CheckboxSize } from "./constants";
import {
  StyledHelpText,
  StyledCheckboxGroup,
  StyledCheckboxGroupInnerWrapper,
} from "./styles";
import type { CheckboxGroupProps } from "./types";

export const CheckboxGroup = React.forwardRef<
  HTMLFieldSetElement,
  CheckboxGroupProps
>(
  (
    {
      horizontal,
      children,
      disabled,
      readOnly,
      required,
      size,
      additional,
      label,
      validate,
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
    const name = children[0].props.name;
    const seed = useUIDSeed();
    const { touched, errors } = useFormikContext();
    const describedby: string[] = [];
    const childrenArray = React.Children.toArray(children);

    // Make sure the errored control has been touched
    const hasError = childrenArray.some(
      (child) =>
        React.isValidElement(child) &&
        touched[child.props.name] &&
        errors[child.props.name]
    );

    if (
      new Set(
        childrenArray
          .map((child) => React.isValidElement(child) && child.props.value)
          .filter(Boolean)
      ).size !== childrenArray.length
    ) {
      console.warn(
        "[CheckboxGroup]: All checkboxes within a group should have unique values"
      );
    }

    hasError && describedby.push(seed(`${name}_error`));
    Boolean(additional) && describedby.push(seed(`${name}_additional`));

    return (
      <StyledCheckboxGroup
        ref={ref}
        disabled={disabled}
        aria-describedby={describedby.join(" ")}
        aria-labelledby={seed(`${name}_label`)}
        margin={margin}
        marginY={marginY}
        marginX={marginX}
        marginRight={marginRight}
        marginLeft={marginLeft}
        marginBottom={marginBottom}
        marginTop={marginTop}
        {...props}
      >
        {label && (
          <Label
            id={seed(`${name}_label`)}
            disabled={Boolean(disabled)}
            required={Boolean(required)}
            as="legend"
            size={
              Boolean(size === CheckboxSize.NORMAL)
                ? LabelSize.NORMAL
                : LabelSize.SMALL
            }
          >
            {label}
          </Label>
        )}
        {Boolean(additional) && (
          <StyledHelpText id={seed(`${name}_additional`)} size={size}>
            {additional}
          </StyledHelpText>
        )}
        <StyledCheckboxGroupInnerWrapper horizontal={horizontal}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              size,
              disabled,
              readOnly,
              required,
              validate,
              noValidate,
              isGrouped: true,
              marginTop: "scale20",
            })
          )}
        </StyledCheckboxGroupInnerWrapper>

        {hasError && (
          <HelpText id={seed(`${name}_error`)} variant={HelpTextVariant.ERROR}>
            {errors[name]}
          </HelpText>
        )}
      </StyledCheckboxGroup>
    );
  }
);

CheckboxGroup.displayName = "CheckboxGroup";

CheckboxGroup.propTypes = {
  ...marginPropTypes,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(CheckboxSize)),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  additional: PropTypes.string,
};

CheckboxGroup.defaultProps = {
  size: CheckboxSize.NORMAL,
};
