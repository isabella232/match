import { space, variant } from "styled-system";
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

import { MarginProps } from "@twilio-labs/match-props";

import { SelectSize } from "./constants";
import type { StyledSelectProps, StyledSelectContainerProps } from "./types";

export const StyledSelectWrapper = styled.div<MarginProps>`
  ${space}
`;

export const StyledSelectContainer = styled.div<StyledSelectContainerProps>`
  position: relative;
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
      background: ${themeGet("colors.gray10")};
      border-color: ${themeGet("colors.gray10")};
    `}

  &:focus-within {
    margin: calc(
      ${themeGet("borderWidths.thin")} - ${themeGet("borderWidths.light")}
    );
    border-color: ${themeGet("borderColors.focusPrimary")};
    border-width: ${themeGet("borderWidths.light")};
  }
`;

export const StyledSelect = styled.select<StyledSelectProps>`
  display: block;
  width: 100%;
  padding-right: ${themeGet("space.scale100")};
  padding-left: ${themeGet("space.scale100")};
  color: ${themeGet("components.form.inputColor")};
  font-weight: ${themeGet("fontWeights.medium")};
  font-size: ${themeGet("fontSizes.scale100")};
  font-family: ${themeGet("fontFamilies.text")};
  line-height: ${themeGet("lineHeights.scale200")};
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.183058 0.719405C0.427136 0.475327 0.822864 0.475327 1.06694 0.719405L5 4.65246L8.93306 0.719405C9.17714 0.475327 9.57286 0.475327 9.81694 0.719405C10.061 0.963482 10.061 1.35921 9.81694 1.60329L5.68077 5.73946C5.6807 5.73953 5.68063 5.7396 5.68055 5.73968C5.50018 5.92039 5.25533 6.02195 5 6.02195C4.74473 6.02195 4.49995 5.92044 4.31959 5.73982C4.31947 5.7397 4.31935 5.73958 4.31923 5.73946L0.183058 1.60329C-0.0610194 1.35921 -0.0610194 0.963482 0.183058 0.719405Z' fill='%23394762'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:disabled {
    color: ${themeGet("components.form.inputDisabledColor")};
    pointer-events: none;
  }

  /* stylelint-disable-next-line a11y/no-outline-none -- focus state handled by wrapper */
  &:focus {
    outline: none;
  }

  &:invalid {
    box-shadow: none;
  }

  ${variant({
    prop: "value",
    variants: {
      "": {
        color: "gray70",
        opacity: 1,
      },
    },
  })};

  ${variant({
    prop: "inputSize",
    variants: {
      [SelectSize.NORMAL]: {
        py: "scale60",
      },
      [SelectSize.SMALL]: {
        py: "scale7",
        fontSize: "scale80",
      },
    },
  })};
`;
