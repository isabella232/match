import styled, { css } from "styled-components";
import { space } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { MarginProps } from "@twilio-labs/match-props";
import type { StyledTextareaProps } from "./types";

export const StyledTextarea = styled.textarea.withConfig({
  shouldForwardProp: (prop, validate) =>
    !["rows"].includes(prop) && validate(prop),
})<StyledTextareaProps>`
  display: block;
  width: 100%;
  margin: 0;
  padding: ${themeGet("space.scale60")} ${themeGet("space.scale100")};
  color: ${themeGet("components.form.inputColor")};
  font-weight: ${themeGet("fontWeights.regular")};
  font-size: ${themeGet("fontSizes.scale80")};
  font-family: ${themeGet("fontFamilies.text")};
  line-height: ${themeGet("components.form.textareaLineHeight")};
  border-color: ${themeGet("borderColors.medium")};
  border-style: solid;
  border-width: ${themeGet("borderWidths.thin")};
  border-radius: ${themeGet("radii.base")};
  resize: vertical;

  ${({
    rows,
    theme: {
      components: {
        form: { textareaLineHeight },
      },
      space: sp,
      borderWidths: bw,
    },
  }) => css`
    height: calc(
      ${rows}em * ${textareaLineHeight} + ${sp.scale100} * 2 + ${bw.thin} * 2
    );
    min-height: calc(
      3em * ${textareaLineHeight} + ${sp.scale100} * 2 + ${bw.thin} * 2
    );
    max-height: calc(
      10em * ${textareaLineHeight} + ${sp.scale100} * 2 + ${bw.thin} * 2
    );
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
    border-color: ${themeGet("colors.gray10")};
    pointer-events: none;
  }

  :focus {
    border-color: ${themeGet("borderColors.focusPrimary")};
    border-width: ${themeGet("borderWidths.light")};
    outline: none;
  }

  :invalid {
    box-shadow: none;
  }

  &[aria-invalid="true"] {
    border-color: ${themeGet("colors.red60")};
    border-width: ${themeGet("borderWidths.light")};
  }

  :focus,
  &[aria-invalid="true"] {
    padding: ${({ theme: { space: sp, borderWidths: bw } }) =>
      `calc(${sp.scale60} - ${bw.light} + ${bw.thin}) calc(${sp.scale100} - ${bw.light} + ${bw.thin})`};
  }
`;

export const StyledTextareaWrapper = styled.div<MarginProps>`
  ${space}
`;
