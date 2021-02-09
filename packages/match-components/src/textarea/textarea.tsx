import * as React from "react";
import * as PropTypes from "prop-types";
import { useUIDSeed } from "react-uid";
import { marginPropTypes } from "@twilio-labs/match-props";
import {
  Label,
  HelpText,
  HelpTextVariant,
} from "@twilio-labs/match-primitives";
import {
  StyledTextarea,
  StyledShadowTextarea,
  StyledTextareaContainer,
  StyledTextareaWrapper,
} from "./styles";
import { TextareaResizeOptions } from "./constants";
import type { TextareaProps } from "./types";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helper,
      error,
      name,
      defaultValue,
      disabled,
      required,
      hideLabel,
      rows = 3,
      resize,
      onChange = () => {},
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
    const [height, setHeight] = React.useState<number>(0);
    const shadowRef = React.useRef<HTMLTextAreaElement>(null);
    const seed = useUIDSeed();

    const resizeTextarea = () => {
      if (shadowRef.current) {
        setHeight(shadowRef.current.scrollHeight);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (shadowRef.current && resize === TextareaResizeOptions.SMART) {
        shadowRef.current.value = e.currentTarget.value;
        resizeTextarea();
      }
      onChange(e);
    };

    React.useEffect(() => {
      if (resize === TextareaResizeOptions.SMART) {
        resizeTextarea();
        window.addEventListener("resize", resizeTextarea);
      } else {
        setHeight(0);
        window.removeEventListener("resize", resizeTextarea);
      }
      return () => window.removeEventListener("resize", resizeTextarea);
    }, [resize]);

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
        <StyledTextareaContainer>
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
            rows={rows}
            resize={resize}
            onChange={handleChange}
            style={{ height: Boolean(height) ? `${height}px` : undefined }}
            defaultValue={defaultValue}
            {...props}
          />
          {resize === TextareaResizeOptions.SMART && (
            <StyledShadowTextarea
              disabled
              aria-hidden={true}
              tabIndex={-1}
              ref={shadowRef}
              rows={rows}
              defaultValue={defaultValue}
            />
          )}
        </StyledTextareaContainer>
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
  defaultValue: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  hideLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  helper: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.oneOf([3, 4, 5, 6, 7, 8, 9, 10]),
  resize: PropTypes.oneOf(Object.values(TextareaResizeOptions)),
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  rows: 3,
  resize: TextareaResizeOptions.MANUAL,
};
