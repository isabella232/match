import { themeGet } from "@styled-system/theme-get";
import styled, { css } from "styled-components";
import { variant } from "styled-system";

import { LabelSize, LabelAlignment } from "./constants";
import type { StyledLabelProps } from "./types";

export const StyledRequired = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-right: ${themeGet("space.scale7")};
  background-color: ${themeGet("colors.red60")};
  border-radius: 50%;
`;

export const StyledLabel = styled.label<StyledLabelProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${themeGet("space.scale7")};
  padding: ${themeGet("space.scale0")};
  color: ${themeGet("textColors.primary")};
  font-weight: ${themeGet("components.form.labelFontWeight")};

  ${({ alignment }) =>
    alignment === LabelAlignment.CENTER
      ? css`
          justify-content: center;
        `
      : css`
          > span:last-of-type {
            flex: 1;
          }
        `}

  ${variant({
    prop: "labelSize",
    variants: {
      [LabelSize.NORMAL]: {
        fontSize: "scale100",
        lineHeight: "scale180",
      },
      [LabelSize.SMALL]: {
        fontSize: "scale80",
        lineHeight: "scale160",
      },
    },
  })};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${themeGet("textColors.tertiary")};

      ${StyledRequired} {
        background-color: ${themeGet("colors.gray60")};
      }
    `}
`;
