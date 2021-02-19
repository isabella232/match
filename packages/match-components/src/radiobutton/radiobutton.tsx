import * as React from "react";
import * as PropTypes from "prop-types";
import { useUIDSeed } from "react-uid";
import { marginPropTypes } from "@twilio-labs/match-props";
import { HelpText, HelpTextVariant } from "@twilio-labs/match-primitives";
import {
  StyledRadio,
  StyledRadioWrapper,
  HiddenRadio,
  StyledRadioLabel,
  StyledRadioAdditional,
  StyledRadioGroupWrapper,
  StyledRadioGroup,
} from "./styles";
import { RadioSize } from "./constants";
import type { RadioProps, RadioGroupProps } from "./types";

export const RadioGroup = React.forwardRef<
  HTMLFieldSetElement,
  RadioGroupProps
>(
  ({
    children,
    helper,
    error,
    name,
    margin,
    marginY,
    marginX,
    marginRight,
    marginLeft,
    marginBottom,
    marginTop,
    ...props
  }) => {
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
      >
        {Boolean(helper) && (
          <HelpText id={seed(`${name}_message`)}>{helper}</HelpText>
        )}
        <StyledRadioGroup {...props}>{children}</StyledRadioGroup>
        {Boolean(error) && (
          <HelpText
            id={seed(`${name}_message`)}
            variant={HelpTextVariant.ERROR}
          >
            {error}
          </HelpText>
        )}
      </StyledRadioGroupWrapper>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

RadioGroup.propTypes = {
  ...marginPropTypes,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  groupLabel: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(RadioSize)),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.string,
  helper: PropTypes.string,
  vertical: PropTypes.bool,
};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size,
      additional,
      error,
      name,
      label,
      value,
      disabled,
      checked,
      readOnly,
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
        <label>
          <HiddenRadio
            type="radio"
            ref={ref}
            id={seed(`${name}_input`)}
            name={name}
            value={value}
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
            {...props}
          />
          <StyledRadio hasError={Boolean(error)} />
          <StyledRadioLabel>{label}</StyledRadioLabel>
        </label>
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
  additional: PropTypes.string,
  error: PropTypes.bool,
  checked: PropTypes.bool,
};

Radio.defaultProps = {
  size: RadioSize.NORMAL,
};
