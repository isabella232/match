/*
  TODO
  - Use dynamic line height
  - Replace checkmark icon
  - focused state
*/

import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// import { MarginProps } from "@twilio-labs/match-props";
import { HelpText } from "@twilio-labs/match-primitives";
// import { space, variant } from "styled-system";
// import { CheckboxSize } from "./constants";
import {
  CheckboxProps,
  // StyledCheckboxProps,
  StyledCheckboxWrapperProps,
  StyledCheckboxLabelProps,
  // HiddenCheckboxProps,
  // StyledCheckboxGroupProps,
} from "./types";

export const StyledCheckboxWrapper = styled.div<StyledCheckboxWrapperProps>`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: min-content auto;
  margin: 8px 0;
  font-size: ${themeGet("fontSizes.scale100")};
  line-height: 28px;
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
  position: relative;
  display: grid;
  grid-template-areas: "checkbox";
  /* Let checkbox and input share the grid area */
  & > * {
    grid-area: checkbox;
  }

  box-sizing: border-box;
  width: 1em;
  height: 1rem;
  margin-top: 5px;
  background: ${themeGet("colors.gray10")};
  border: 2px solid ${themeGet("colors.gray40")};
  border-radius: 3px;

  /* Hover */
  &:hover {
    background-color: ${themeGet("colors.gray20")};
    ${({ checked }) => {
      checked &&
        css`
          background-color: ${themeGet("colors.blue70")};
          border-color: ${themeGet("colors.blue70")};
        `;
    }}
  }

  /* Hover */
  :hover {
    background-color: ${themeGet("colors.gray20")};
  }

  /* Active + Focus */
  :active,
  :focus {
    border-color: ${themeGet("colors.blue60")};
  }

  /* Checked */
  ${({ checked, readOnly }) =>
    checked &&
    css`
      &:before {
        content: "✓";
        position: absolute;
        width: 8px;
        height: 8px;
        top: 0px;
        left: 0px;
        color: ${readOnly
          ? themeGet("colors.gray30")
          : themeGet("colors.white")};
      }

      background-color: ${themeGet("colors.blue60")};
      border-color: ${themeGet("colors.blue60")};

      /* Hover */
      :hover {
        background-color: ${themeGet("colors.blue70")};
      }
    `}

  /* Disabled */
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${themeGet("colors.gray30")};
      border-color: ${themeGet("colors.gray30")};
    `}

  /* Readonly */
  ${({ readOnly }) =>
    readOnly &&
    css`
      /* Disable hover effects */
      pointer-events: none;
      background-color: ${themeGet("colors.gray10")};
      border-color: ${themeGet("colors.gray20")};
    `}

  /* Errored */
  ${({ error }) =>
    error &&
    css`
      border-color: ${themeGet("colors.red60")};
    `}
`;

export const HiddenInput = styled.input<HiddenInputProps>`
  /* z-index: -1; */
  /* position: absolute; */
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
`;

export const StyledCheckboxLabel = styled.div<StyledCheckboxLabelProps>`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  label {
    color: ${themeGet("colors.gray90")};
    font-weight: ${themeGet("fontWeights.medium")};
  }

  span {
    color: ${themeGet("colors.gray70")};
    font-weight: ${themeGet("fontWeights.regular")};
    font-size: ${themeGet("fontSizes.scale80")};
    line-height: 21px;
  }
`;

export const StyledCheckboxGroup = styled.fieldset<StyledCheckboxGroupProps>`
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-block-start: 0;
  padding-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  border: none;
  min-inline-size: min-content;

  legend {
    margin-bottom: 8px;
    font-weight: ${themeGet("fontWeights.regular")};
  }
`;

export const StyledHelpText = styled(HelpText)`
  margin: 0 0 8px 0;
  color: ${themeGet("colors.gray60")};
  font-weight: ${themeGet("fontWeights.regular")};
  font-size: ${themeGet("fontSizes.scale80")};
  line-height: 20px;
`;

export const StyledCheckboxGroupWrapper = styled.div<StyledCheckboxGroupProps>``;
