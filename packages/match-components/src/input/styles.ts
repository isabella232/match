import styled, { css } from "styled-components";
import { variant, space } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { MarginProps } from "@twilio-labs/match-props";
import type { StyledInputProps, StyledInputContainerProps } from "./types";
import { InputSize } from "./constants";

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
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

export const StyledInput = styled.input<StyledInputProps>`
  display: block;
  width: 100%;
  margin: 0;
  padding-right: ${themeGet("space.scale100")};
  padding-left: ${themeGet("space.scale100")};
  color: ${themeGet("components.form.inputColor")};
  font-weight: ${themeGet("fontWeights.medium")};
  font-size: ${themeGet("fontSizes.scale80")};
  font-family: ${themeGet("fontFamilies.text")};
  line-height: ${themeGet("lineHeights.scale200")};
  border: none;

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
  }

  :focus {
    outline: none;
  }

  :invalid {
    box-shadow: none;
  }

  ${variant({
    prop: "inputSize",
    variants: {
      [InputSize.NORMAL]: {
        py: "scale60",
      },
      [InputSize.SMALL]: {
        py: "scale7",
      },
    },
  })};
`;

export const StyledInputWrapper = styled.div<MarginProps>`
  ${space}
`;
