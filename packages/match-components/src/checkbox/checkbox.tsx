import * as React from "react";
import * as PropTypes from "prop-types";
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
  // StyledCheckboxWrapper,
  // HiddenCheckbox,
  // StyledCheckboxLabel,
  // StyledCheckboxAdditional,
  // StyledCheckboxGroupWrapper,
  // StyledCheckboxGroup,
  // StyledCheckboxLabelWrapper,
} from "./styles";
import { CheckboxSize } from "./constants";
import type { CheckboxProps } from "./types";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      additional,
      name,
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
    return <StyledCheckbox ref={ref} {...props} />;
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
