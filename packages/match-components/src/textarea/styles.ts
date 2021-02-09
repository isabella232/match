import styled, { css } from "styled-components";
import { space } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { MarginProps } from "@twilio-labs/match-props";
import type { StyledTextareaProps } from "./types";
import { TextareaResizeOptions } from "./constants";

export const StyledTextareaContainer = styled.div`
  position: relative;
  padding: ${themeGet("borderWidths.thin")};
`;

export const StyledTextarea = styled.textarea.withConfig({
  shouldForwardProp: (prop, validate) =>
    !["rows"].includes(prop) && validate(prop),
})<StyledTextareaProps>`
  display: block;
  width: 100%;
  margin: 0;
  background: ${themeGet("backgroundColors.white")};
  padding: ${themeGet("space.scale60")} ${themeGet("space.scale100")};
  color: ${themeGet("components.form.inputColor")};
  font-weight: ${themeGet("fontWeights.regular")};
  font-size: ${themeGet("fontSizes.scale80")};
  font-family: ${themeGet("fontFamilies.text")};
  line-height: ${themeGet("components.form.textareaLineHeight")};
  border: none;
  border-radius: ${themeGet("radii.base")};
  resize: ${({ resize }) =>
    resize === TextareaResizeOptions.MANUAL ? "vertical" : "none"};
  box-shadow: ${themeGet("borderColors.medium")} 0 0 0
    ${themeGet("borderWidths.thin")};

  ${({
    rows,
    theme: {
      components: { form },
      space,
    },
  }) => css`
    height: calc(${rows}em * ${form.textareaLineHeight} + ${space.scale60} * 2);
    min-height: calc(3em * ${form.textareaLineHeight} + ${space.scale60} * 2);
    max-height: calc(10em * ${form.textareaLineHeight} + ${space.scale60} * 2);
  `};

  ::placeholder {
    color: ${themeGet("textColors.tertiary")};
  }

  :read-only {
    color: ${themeGet("textColors.secondary")};
    background: ${themeGet("colors.gray10")};
  }

  :disabled {
    color: ${themeGet("components.form.inputDisabledColor")};
    background: ${themeGet("colors.gray10")};
    box-shadow: ${themeGet("colors.gray10")} 0 0 0
      ${themeGet("borderWidths.thin")};
    pointer-events: none;
    resize: none;
    overflow: hidden;
  }

  :focus {
    box-shadow: ${themeGet("borderColors.focusPrimary")} 0 0 0
      ${themeGet("borderWidths.light")};
    outline: none;
  }

  :invalid {
    box-shadow: ${themeGet("borderColors.medium")} 0 0 0
      ${themeGet("borderWidths.thin")};
  }

  &[aria-invalid="true"] {
    box-shadow: ${themeGet("colors.red60")} 0 0 0
      ${themeGet("borderWidths.light")};
  }
`;

export const StyledShadowTextarea = styled(StyledTextarea)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000;
  height: 0;
  min-height: 0;
  max-height: 0;
  overflow: hidden;
  visibility: hidden;
  pointer-events: none;
`;

export const StyledTextareaWrapper = styled.div<MarginProps>`
  ${space}
`;
