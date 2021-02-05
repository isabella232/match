import * as React from "react";
import * as PropTypes from "prop-types";
import { useUIDSeed } from "react-uid";
import { marginPropTypes } from "@twilio-labs/match-props";
import {
  Label,
  HelpText,
  HelpTextVariant,
} from "@twilio-labs/match-primitives";
import { StyledTextarea, StyledTextareaWrapper } from "./styles";
import type { TextareaProps } from "./types";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helper,
      error,
      name,
      disabled,
      required,
      hideLabel,
      rows,
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
      <StyledTextareaWrapper
        margin={margin}
        marginY={marginY}
        marginX={marginX}
        marginRight={marginRight}
        marginLeft={marginLeft}
        marginBottom={marginBottom}
        marginTop={marginTop}
      >
        {!hideLabel && (
          <Label
            id={seed(`${name}_label`)}
            htmlFor={seed(`${name}_input`)}
            disabled={Boolean(disabled)}
            required={Boolean(required)}
          >
            {label}
          </Label>
        )}
        <StyledTextarea
          ref={ref}
          id={seed(`${name}_input`)}
          name={name}
          aria-label={hideLabel ? label : undefined}
          aria-labelledby={!hideLabel ? seed(`${name}_label`) : undefined}
          aria-describedby={
            Boolean(helper || error) ? seed(`${name}_message`) : undefined
          }
          aria-invalid={Boolean(error)}
          aria-disabled={disabled}
          disabled={disabled}
          required={required}
          rows={rows || 3}
          {...props}
        />
        {Boolean(helper || error) && (
          <HelpText
            id={seed(`${name}_message`)}
            variant={Boolean(error) ? HelpTextVariant.ERROR : undefined}
          >
            {Boolean(error) ? error : helper}
          </HelpText>
        )}
      </StyledTextareaWrapper>
    );
  }
);

Textarea.displayName = "Textarea";

Textarea.propTypes = {
  ...marginPropTypes,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  helper: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  rows: 3,
};
