import { themeGet } from "@styled-system/theme-get";
import styled, { css } from "styled-components";
import { space, variant } from "styled-system";

import { StyledIcon } from "@twilio-labs/match-primitives";

import { CheckboxSize } from "./constants";
import type {
  StyledCheckboxProps,
  StyledCheckboxWrapperProps,
  StyledCheckboxLabelProps,
  HiddenInputProps,
  StyledCheckboxGroupProps,
  StyledHelpTextProps,
  CheckboxGroupInnerWrapperProps,
} from "./types";

export const StyledCheckboxWrapper = styled.div<StyledCheckboxWrapperProps>`
  ${space}
  display: grid;
  grid-gap: ${themeGet("space.scale60")};
  grid-template-columns: min-content max-content;
  /* This sets the checkbox size */
  font-size: ${themeGet("fontSizes.scale100")};
  line-height: 28px;
  ${({ size }) =>
    Boolean(size == CheckboxSize.SMALL) &&
    css`
      font-size: ${themeGet("fontSizes.scale80")};
      line-height: 24px;
    `}
`;

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  position: relative;
  display: grid;
  grid-template-areas: "checkbox";
  /* Let checkbox and input share the grid area */
  & > * {
    grid-area: checkbox;
  }

  width: 1em;
  height: 1em;
  /* Set icon color */
  color: ${themeGet("colors.white")};
  background: ${themeGet("colors.gray10")};
  border: 2px solid ${themeGet("colors.gray40")};
  border-radius: 3px;

  ${variant({
    prop: "size",
    variants: {
      [CheckboxSize.SMALL]: {
        marginTop: "5px",
      },
      [CheckboxSize.NORMAL]: {
        marginTop: "6px",
      },
    },
  })}

  /* Checkmark Icon */
  ${StyledIcon} {
    width: auto;
    height: auto;
  }

  &:hover {
    background-color: ${themeGet("colors.gray20")};
  }

  &:active,
  &:focus,
  &:focus-within {
    border-color: ${themeGet("colors.blue50")};
  }

  ${({ checked }) =>
    checked &&
    css`
      background-color: ${themeGet("colors.blue60")};
      border-color: ${themeGet("colors.blue60")};

      :hover {
        background-color: ${themeGet("colors.blue70")};
        border-color: ${themeGet("colors.blue70")};
      }

      :active,
      :focus,
      :focus-within {
        border-color: ${themeGet("borderColors.focusPrimary")};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      /* Disable hover effects on readonly */
      background-color: ${themeGet("colors.gray30")};
      border-color: ${themeGet("colors.gray30")};
      pointer-events: none;
    `}

  ${({ readOnly }) =>
    readOnly &&
    css`
      /* Disable hover effects on readonly */
      color: ${themeGet("colors.gray30")};
      background-color: ${themeGet("colors.gray10")};
      border-color: ${themeGet("colors.gray20")};
      pointer-events: none;
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${themeGet("colors.red60")};
    `}
`;

export const HiddenInput = styled.input<HiddenInputProps>`
  /* Allow a larger click area */
  width: 150%;
  height: 150%;
  margin: -25% 0 0 -25%;
  opacity: 0;
`;

export const StyledCheckboxLabel = styled.div<StyledCheckboxLabelProps>`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  > span {
    color: ${themeGet("colors.gray70")};
    font-weight: ${themeGet("fontWeights.regular")};
    line-height: ${themeGet("lineHeights.scale180")};
  }

  > label {
    color: ${themeGet("colors.gray90")};
    font-weight: ${themeGet("fontWeights.medium")};
    line-height: ${themeGet("lineHeights.scale220")};

    span {
      vertical-align: text-top;
    }
  }

  ${variant({
    prop: "size",
    variants: {
      [CheckboxSize.SMALL]: {
        ["> label"]: {
          fontSize: "scale80",
        },
        ["> span"]: {
          fontSize: "scale60",
        },
      },
      [CheckboxSize.NORMAL]: {
        ["> label"]: {
          fontSize: "scale100",
        },
        ["> span"]: {
          fontSize: "scale80",
        },
      },
    },
  })}
`;

export const StyledCheckboxGroup = styled.fieldset<StyledCheckboxGroupProps>`
  /* Reset fieldset styles */
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-block-start: 0;
  padding-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  border: none;
  min-inline-size: min-content;

  ${space}

  legend {
    margin-bottom: 8px;
    font-weight: ${themeGet("fontWeights.semibold")};
  }
`;

export const StyledHelpText = styled.label<StyledHelpTextProps>`
  margin: 0 0 8px 0;
  color: ${themeGet("colors.gray60")};
  font-weight: ${themeGet("fontWeights.regular")};
  font-size: ${themeGet("fontSizes.scale80")};
  line-height: 20px;

  ${({ size }) =>
    Boolean(size == CheckboxSize.SMALL) &&
    css`
      font-size: ${themeGet("fontSizes.scale60")};
      line-height: 18px;
    `}
`;

export const StyledCheckboxGroupInnerWrapper = styled.div<CheckboxGroupInnerWrapperProps>`
  display: flex;
  flex-direction: column;
  ${({ horizontal }) =>
    horizontal &&
    css`
      flex-direction: row;
      & > * {
        margin-right: 32px;
        &:last-child {
          margin-right: 0;
        }
      }
    `}
`;
