import styled from "styled-components";
import { variant, space } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { MarginProps } from "@twilio-labs/match-props";
import type { StyledInputProps, StyledLabelProps } from "./types";
import { InputSize } from "./types";

const StyledLabel = styled.label<StyledLabelProps>`
  display: block;
  margin-bottom: ${themeGet("space.scale7")};
  color: ${({ inputDisabled }) =>
    inputDisabled
      ? themeGet("textColors.tertiary")
      : themeGet("textColors.primary")};
  font-weight: ${themeGet("components.input.labelFontWeight")};
  font-size: ${themeGet("fontSizes.scale80")};
  line-height: ${themeGet("lineHeights.scale160")};
`;

const StyledHelper = styled.div`
  margin-top: ${themeGet("space.scale7")};
  color: ${themeGet("textColors.tertiary")};
  font-weight: ${themeGet("components.input.helperFontWeight")};
  font-size: ${themeGet("fontSizes.scale60")};
  line-height: ${themeGet("lineHeights.scale180")};
`;

const StyledError = styled.div`
  margin-top: ${themeGet("space.scale7")};
  color: ${themeGet("colors.red60")};
  font-weight: ${themeGet("fontWeights.medium")};
  font-size: ${themeGet("fontSizes.scale60")};
  line-height: ${themeGet("lineHeights.scale180")};
`;

const StyledRequired = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-right: ${themeGet("space.scale7")};
  vertical-align: middle;
  background-color: ${themeGet("colors.red60")};
  border-radius: 50%;
`;

const StyledInput = styled.input<StyledInputProps>`
  display: block;
  width: 100%;
  padding-right: ${themeGet("space.scale100")};
  padding-left: ${themeGet("space.scale100")};
  color: ${themeGet("textColors.primary")};
  font-weight: ${themeGet("fontWeights.regular")};
  font-size: ${themeGet("fontSizes.scale80")};
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
    color: ${themeGet("textColors.tertiary")};
    background: ${themeGet("colors.gray10")};
    border-color: ${themeGet("colors.gray10")};
    pointer-events: none;
  }

  :focus {
    border-color: ${themeGet("borderColors.focusPrimary")};
    border-width: ${themeGet("borderWidths.light")};
    outline: none;
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

const StyledInputWrapper = styled.div<MarginProps>`
  ${space}
`;

export {
  StyledInput,
  StyledLabel,
  StyledHelper,
  StyledError,
  StyledRequired,
  StyledInputWrapper,
};
