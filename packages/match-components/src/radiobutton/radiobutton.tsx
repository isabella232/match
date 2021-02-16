import * as React from "react";
import * as PropTypes from "prop-types";
import { useUIDSeed } from "react-uid";
import { marginPropTypes } from "@twilio-labs/match-props";
import { StyledRadio, StyledRadioWrapper, HiddenRadio } from "./styles";
import { RadioSize } from "./constants";
import type { RadioButtonProps } from "./types";

export const Radio = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      helper,
      error,
      name,
      disabled,
      checked,
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
      >
        <HiddenRadio
          type="radio"
          ref={ref}
          id={seed(`${name}_input`)}
          name={name}
          aria-labelledby={seed(`${name}_label`)}
          aria-describedby={
            Boolean(helper || error) ? seed(`${name}_message`) : undefined
          }
          aria-invalid={Boolean(error)}
          aria-disabled={disabled}
          checked={checked}
          disabled={disabled}
        />
        <StyledRadio {...props} />
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
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  helper: PropTypes.string,
  error: PropTypes.string,
  checked: PropTypes.bool,
};

Radio.defaultProps = {
  size: RadioSize.NORMAL,
};
