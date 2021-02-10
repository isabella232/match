import styled from "styled-components";
import { variant, space } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { MarginProps } from "@twilio-labs/match-props";
import type { StyledInputProps } from "./types";
import { InputSize } from "./constants";

export const StyledInput = styled.input<StyledInputProps>`
  display: block;
  width: 100%;
  padding-right: ${themeGet("space.scale100")};
  padding-left: ${themeGet("space.scale100")};
  color: ${themeGet("components.form.inputColor")};
  font-weight: ${themeGet("fontWeights.regular")};
  font-size: ${themeGet("fontSizes.scale80")};
  font-family: ${themeGet("fontFamilies.text")};
  line-height: ${themeGet("lineHeights.scale200")};
  border-color: ${themeGet("borderColors.medium")};
  border-style: solid;
  border-width: ${themeGet("borderWidths.thin")};
  border-radius: ${themeGet("radii.base")};

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

  ${({ theme: { space: sp, borderWidths: bw } }) =>
    variant({
      prop: "inputSize",
      variants: {
        [InputSize.NORMAL]: {
          py: "scale60",
          ["&:focus, &[aria-invalid='true']"]: {
            py: `calc(${sp.scale60} - ${bw.light} + ${bw.thin})`,
            px: `calc(${sp.scale100} - ${bw.light} + ${bw.thin})`,
          },
        },
        [InputSize.SMALL]: {
          py: "scale7",
          ["&:focus, &[aria-invalid='true']"]: {
            py: `calc(${sp.scale7} - ${bw.light} + ${bw.thin})`,
            px: `calc(${sp.scale100} - ${bw.light} + ${bw.thin})`,
          },
        },
      },
    })};
`;

export const StyledInputWrapper = styled.div<MarginProps>`
  ${space}
`;
