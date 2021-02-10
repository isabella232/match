import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import type { LabelProps } from "./types";

export const StyledRequired = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-right: ${themeGet("space.scale7")};
  vertical-align: middle;
  background-color: ${themeGet("colors.red60")};
  border-radius: 50%;
`;

export const StyledLabel = styled.label<LabelProps>`
  display: block;
  margin-bottom: ${themeGet("space.scale7")};
  color: ${themeGet("textColors.primary")};
  font-weight: ${themeGet("components.form.labelFontWeight")};
  font-size: ${themeGet("fontSizes.scale80")};
  line-height: ${themeGet("lineHeights.scale160")};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${themeGet("textColors.tertiary")};

      ${StyledRequired} {
        background-color: ${themeGet("colors.gray60")};
      }
    `}
`;
