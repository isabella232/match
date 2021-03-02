import * as React from "react";
import * as PropTypes from "prop-types";
import { useField } from "formik";
import { useUIDSeed } from "react-uid";
import { marginPropTypes } from "@twilio-labs/match-props";
import {
  Label,
  LabelSize,
  // HelpText,
  // HelpTextVariant,
} from "@twilio-labs/match-primitives";
import {
  StyledCheckbox,
  StyledCheckboxWrapper,
  HiddenInput,
  StyledCheckboxLabel,
  // StyledCheckboxAdditional,
  StyledHelpText,
  StyledCheckboxGroupWrapper,
  StyledCheckboxGroup,
  // StyledCheckboxLabelWrapper,
} from "./styles";
import { CheckboxSize } from "./constants";
import type { CheckboxProps, CheckboxGroupProps } from "./types";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name,
      value,
      disabled,
      readOnly,
      size,
      label,
      additional,
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
    const seed = useUIDSeed();
    const validate = (value: string) => {
      if (noValidate) return;
      if (validateOverride) return validateOverride(value);
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
          ref={ref}
          role="checkbox"
          aria-checked="false"
          tabindex="0"
          id={seed(`${name}_input`)}
          aria-labelledby={seed(`${name}_label`)}
          aria-describedby={
            Boolean(additional) ? seed(`${name}_additional`) : undefined
          }
          aria-invalid={hasError}
          aria-disabled={disabled}
          disabled={disabled}
          readOnly={readOnly}
          hasError={hasError}
          checked={field.checked}
          size={size}
          {...props}
        >
          <HiddenInput
            type="checkbox"
            disabled={disabled}
            name={name}
            value={value}
            {...field}
          />
        </StyledCheckbox>
        <StyledCheckboxLabel>
          {label && (
            <label id={seed(`${name}_label`)} htmlFor={seed(`${name}_input`)}>
              {label}
            </label>
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
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(CheckboxSize)),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  additional: PropTypes.string,
  checked: PropTypes.bool,
};

export const CheckboxGroup = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupProps
>(
  (
    {
      name,
      children,
      disabled,
      readOnly,
      required,
      size,
      additional,
      label,
      // margin,
      // marginY,
      // marginX,
      // marginRight,
      // marginLeft,
      // marginBottom,
      // marginTop,
      ...props
    },
    ref
  ) => {
    const seed = useUIDSeed();
    name = name ? name : children && children[0].props.name;
    const values: Array<string> = [];
    children &&
      children.map((child) => {
        // Checkboxes should have the same name
        // if (child.props.name != name) {
        //   console.warn(
        //     "[CheckboxGroup]: All checkboxes within a group should use the same name"
        //   );
        // }

        // ...But should have unique values
        if (values.includes(child.props.value)) {
          console.warn(
            "[CheckboxGroup]: All checkboxes within a group should have unique values"
          );
        }
        values.push(child.props.value);
      });

    return (
      <StyledCheckboxGroupWrapper>
        <StyledCheckboxGroup ref={ref} {...props}>
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
            {label}
          </Label>
          {Boolean(additional) && (
            <StyledHelpText id={seed(`${name}_additional`)}>
              {additional}
            </StyledHelpText>
          )}
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              name: name,
              size: size,
              disabled: disabled,
              readOnly: readOnly,
              required: required,
              // validate: validate,
              // noValidate: noValidate,
            })
          )}
        </StyledCheckboxGroup>
      </StyledCheckboxGroupWrapper>
    );
  }
);

CheckboxGroup.displayName = "CheckboxGroup";

CheckboxGroup.propTypes = {
  ...marginPropTypes,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(CheckboxSize)),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  additional: PropTypes.string,
};

Checkbox.defaultProps = {
  size: CheckboxSize.NORMAL,
};
