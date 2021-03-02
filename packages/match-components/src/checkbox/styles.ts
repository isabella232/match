import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { MarginProps } from "@twilio-labs/match-props";
import { space, variant } from "styled-system";
import { CheckboxSize } from "./constants";
import {
  CheckboxProps,
  StyledCheckboxProps,
  StyledCheckboxWrapperProps,
  StyledCheckboxLabelProps,
  // HiddenCheckboxProps,
  StyledCheckboxGroupProps,
} from "./types";

//Wraps around and sets up a grid for all radio buttons in radio group
export const StyledCheckbox = styled.div<CheckboxProps>`
  margin: 12px;
  position: relative;
  box-sizing: border-box;

  width: 1em;
  height: 1rem;

  background: ${themeGet("colors.gray10")};
  border: 2px solid ${themeGet("colors.gray40")};
  border-radius: 3px;

  // Hover
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

  // Hover
  :hover {
    background-color: ${themeGet("colors.gray20")};
  }

  // Active + Focus
  :active,
  :focus {
    border-color: ${themeGet("colors.blue60")};
  }
  /* ${({ focused }) =>
    focused &&
      css`
        border-color: ${themeGet("colors.blue60")};
      `
  } */

  // Checked
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
          color:  ${readOnly ? themeGet("colors.gray30") : themeGet("colors.white")};
        }

        background-color: ${themeGet("colors.blue60")};
        border-color: ${themeGet("colors.blue60")};

        // Hover
        :hover {
          background-color: ${themeGet("colors.blue70")};
        }
      `
  }

  // Disabled
  ${({ disabled }) =>
    disabled &&
      css`

        background-color: ${themeGet("colors.gray30")};
        border-color: ${themeGet("colors.gray30")};

      `
  }

  // Readonly
  ${({ readOnly }) =>
    readOnly &&
      css`
        // Disable hover effects
        pointer-events: none;
        background-color: ${themeGet("colors.gray10")};
        border-color: ${themeGet("colors.gray20")};
      `
  }

  // Errored
  ${({ error }) =>
    error &&
      css`
        border-color: ${themeGet("colors.red60")};
      `
  }

`;

export const HiddenInput = styled.input<HiddenInputProps>`
  // Under the custom checkbox
  position: absolute;
  z-index: -1;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const StyledCheckboxWrapper = styled.div<StyledCheckboxWrapperProps>`
  font-size: 16px;
  line-height: 28px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StyledCheckboxLabel = styled.div<StyledCheckboxLabelProps>`

  margin-top: 7px;
  max-width: 100%;

  display: flex;
  flex-direction: column;


  label {
    color: ${themeGet("colors.gray90")};
    font-weight: ${themeGet("fontWeights.medium")};
  }

  span {
    font-weight: ${themeGet("fontWeights.regular")};
    color: ${themeGet("colors.gray70")};
    font-size: 14px;
    line-height: 21px;
  }
`;

export const StyledCheckboxGroup = styled.fieldset<StyledCheckboxGroupProps>``

export const StyledCheckboxGroupLegend = styled.legend<StyledCheckboxGroupProps>``

export const StyledCheckboxGroupWrapper = styled.div<StyledCheckboxGroupProps>``
