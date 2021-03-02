import * as React from "react";
import * as PropTypes from "prop-types";
import { useField } from "formik";
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
  // StyledCheckboxAdditional,
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
      required,
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
    // const validate = (value: string) => {
    //   if (noValidate) return;
    //   if (validateOverride) return validateOverride(value);
    //   if (required && !value) {
    //     return "This field is required";
    //   }
    // };
    // const [field, meta] = useField({
    //   name,
    //   disabled,
    //   value,
    //   type: "checkbox",
    //   validate,
    //   ...props,
    // });
    // const hasError = meta.touched && Boolean(meta.error);

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
          // aria-invalid={hasError}
          aria-disabled={disabled}
          disabled={disabled}
          readOnly={readOnly}
          // hasError={hasError}
          // checked={field.checked}
          size={size}
          {...props}
          />
        <HiddenInput
          type="checkbox"
          disabled={disabled}
          name={name}
          value={value}
          // {...field}
        />
        <StyledCheckboxLabel>
          {label && (
            <label
              id={seed(`${name}_label`)}
              htmlFor={seed(`${name}_input`)}
            >
              {label}
            </label>)}
          {Boolean(additional) && (<span id={seed(`${name}_additional`)}>{additional}</span>)}
        </StyledCheckboxLabel>
      </StyledCheckboxWrapper>
    )
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

export const CheckboxGroup = React.forwardRef<HTMLInputElement, CheckboxGroupProps>(
  (
    {
      children,
      disabled,
      readOnly,
      required,
      size,
      additional,
      label,
      value,
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
    const name = children && children[0].props.name;
    const values: Array<String> = []
    children && children.map((child) => {
      // Checkboxes should have the same name
      if (child.props.name != name) {
        console.warn(
          "[CheckboxGroup]: All checkboxes within a group should use the same name"
        );
      }

      // ...But should have unique values
      if (values.includes(child.props.value)) {
        console.warn(
          "[CheckboxGroup]: All checkboxes within a group should have unique values"
        )
      }
      values.push(child.props.value)
    });

    return (
      <StyledCheckboxGroupWrapper>
        <StyledCheckboxGroup ref={ref}>
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
    )
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
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  size: CheckboxSize.NORMAL,
};

// export const CheckboxGroup = React.forwardRef<
//   HTMLFieldSetElement,
//   CheckboxGroupProps
// >(
//   ({
//     helper,
//     error,
//     name,
//     required,
//     disabled,
//     groupLabel,
//     children,
//     size,
//     vertical,
//     readOnly,
//     margin,
//     marginY,
//     marginX,
//     marginRight,
//     marginLeft,
//     marginBottom,
//     marginTop,
//   }) => {
//     const seed = useUIDSeed();
//     return (
//       <StyledCheckboxGroupWrapper
//         margin={margin}
//         marginY={marginY}
//         marginX={marginX}
//         marginRight={marginRight}
//         marginLeft={marginLeft}
//         marginBottom={marginBottom}
//         marginTop={marginTop}
//         name={name}
//       >
//         <Label
//           id={seed(`${name}_label`)}
//           disabled={Boolean(disabled)}
//           required={Boolean(required)}
//           as="legend"
//           size={
//             Boolean(size == CheckboxSize.NORMAL)
//               ? LabelSize.NORMAL
//               : LabelSize.SMALL
//           }
//         >
//           {groupLabel}
//         </Label>
//         {Boolean(helper) && (
//           <HelpText id={seed(`${name}_message`)}>{helper}</HelpText>
//         )}
//         <StyledCheckboxGroup vertical={vertical}>
//           {React.Children.map(children, (child) =>
//             React.cloneElement(child, {
//               disabled: disabled,
//               size: size,
//               readOnly: readOnly,
//               error: Boolean(error),
//             })
//           )}
//         </StyledCheckboxGroup>
//         {Boolean(error) && (
//           <HelpText
//             id={seed(`${name}_message`)}
//             variant={HelpTextVariant.ERROR}
//           >
//             {error}
//           </HelpText>
//         )}
//       </StyledCheckboxGroupWrapper>
//     );
//   }
// );

// CheckboxGroup.displayName = "CheckboxGroup";

// CheckboxGroup.propTypes = {
//   ...marginPropTypes,
//   children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   groupLabel: PropTypes.string.isRequired,
//   size: PropTypes.oneOf(Object.values(CheckboxSize)),
//   required: PropTypes.bool,
//   disabled: PropTypes.bool,
//   readOnly: PropTypes.bool,
//   error: PropTypes.string,
//   helper: PropTypes.string,
//   vertical: PropTypes.bool,
// };
