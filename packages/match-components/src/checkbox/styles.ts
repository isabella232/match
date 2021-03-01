import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { MarginProps } from "@twilio-labs/match-props";
import { space, variant } from "styled-system";
import { CheckboxSize } from "./constants";
import {
  StyledCheckboxProps,
  StyledCheckboxWrapperProps,
  // HiddenCheckboxProps,
  // StyledCheckboxGroupProps,
} from "./types";

//Wraps around and sets up a grid for all radio buttons in radio group
export const StyledCheckbox = styled.div<StyledCheckboxProps>`

  position: relative;
  box-sizing: border-box;

  /* Default (16px) */
  width: 16px;
  height: 16px;

  /* Gray/Gray10 - #f4f4f6 */
  background: ${themeGet("colors.gray10")};
  border: 2px solid ${themeGet("colors.gray40")};
  border-radius: 3px;

`;

export const StyledCheckboxWrapper = styled.div<StyledCheckboxWrapperProps>``;

// export const StyledCheckboxLabel = styled.div<StyledCheckboxLabelProps>``;
