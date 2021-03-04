import styled, { css } from "styled-components";
import { space } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { MarginProps } from "@twilio-labs/match-props";
import type {
  StyledTextareaProps,
  StyledTextareaContainerProps,
} from "./types";
import { TextareaResizeOptions } from "./constants";

export const StyledTextareaContainer = styled.div<StyledTextareaContainerProps>`
  position: relative;
  overflow: hidden;
  border-color: ${themeGet("borderColors.medium")};
  border-style: solid;
  border-width: ${themeGet("borderWidths.thin")};
  border-radius: ${themeGet("radii.base")};

  ${({ hasError }) =>
    hasError &&
    css`
      margin: calc(
        ${themeGet("borderWidths.thin")} - ${themeGet("borderWidths.light")}
      );
      border-color: ${themeGet("colors.red60")};
      border-width: ${themeGet("borderWidths.light")};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${themeGet("colors.gray10")};
    `}

  :focus-within {
    margin: calc(
      ${themeGet("borderWidths.thin")} - ${themeGet("borderWidths.light")}
    );
    border-color: ${themeGet("borderColors.focusPrimary")};
    border-width: ${themeGet("borderWidths.light")};
  }
`;

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  display: block;
  width: 100%;
  margin: 0;
  padding: ${themeGet("space.scale60")} ${themeGet("space.scale100")};
  color: ${themeGet("components.form.inputColor")};
  font-weight: ${themeGet("fontWeights.medium")};
  font-size: ${themeGet("fontSizes.scale80")};
  font-family: ${themeGet("fontFamilies.text")};
  line-height: ${themeGet("components.form.textareaLineHeight")};
  background: ${themeGet("backgroundColors.white")};
  border: none;
  resize: ${({ resize }) =>
    resize === TextareaResizeOptions.MANUAL ? "vertical" : "none"};

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
    pointer-events: none;
    resize: none;
    overflow: hidden;
  }

  :focus {
    outline: none;
  }

  :invalid {
    box-shadow: none;
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
