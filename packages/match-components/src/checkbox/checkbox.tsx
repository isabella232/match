import * as React from "react";
import * as PropTypes from "prop-types";
import { useField, useFormikContext } from "formik";
import { useUIDSeed } from "react-uid";
import { marginPropTypes } from "@twilio-labs/match-props";
import {
  Label,
  LabelSize,
  HelpText,
  HelpTextVariant,
} from "@twilio-labs/match-primitives";
import {
  StyledCheckbox,
  StyledCheckboxWrapper,
  HiddenInput,
  StyledCheckboxLabel,
  StyledHelpText,
  StyledCheckboxGroup,
  StyledCheckboxGroupInnerWrapper,
} from "./styles";
import { CheckboxSize } from "./constants";
import type { CheckboxProps, CheckboxGroupProps } from "./types";
import { CheckmarkIcon } from "./checkmark-icon";

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
          aria-checked={field.checked}
          tabindex="0"
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
          {field.checked && (
            <CheckmarkIcon decorative size={size} color="inherit" />
          )}
          <HiddenInput
            id={seed(`${name}_input`)}
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
      horizontal,
      children,
      disabled,
      readOnly,
      required,
      size,
      additional,
      label,
      validate: validateOverride,
      noValidate,
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
    name = name ? name : children && children[0].props.name;
    const seed = useUIDSeed();
    const { touched, errors } = useFormikContext();
    const hasError = touched[name] && errors[name];
    const validate = (value: string) => {
      if (noValidate) return;
      if (validateOverride) return validateOverride(value);
    };

    const values: Array<string> = [];
    const describedby: string[] = [];

    hasError && describedby.push(seed(`${name}_error`));
    Boolean(additional) && describedby.push(seed(`${name}_helper`));

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
      <StyledCheckboxGroup
        ref={ref}
        name={name}
        disabled={disabled}
        aria-describedby={describedby.join(" ")}
        aria-labelledby={seed(`${name}_label`)}
        {...props}
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
          {label}
        </Label>
        {Boolean(additional) && (
          <StyledHelpText id={seed(`${name}_additional`)}>
            {additional}
          </StyledHelpText>
        )}
        <StyledCheckboxGroupInnerWrapper horizontal={horizontal}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              name: name,
              size: size,
              disabled: disabled,
              readOnly: readOnly,
              required: required,
              validate: validate,
              noValidate: noValidate,
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
