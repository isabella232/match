import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { MarginProps } from "@twilio-labs/match-props";
import { space, variant } from "styled-system";
import { RadioSize } from "./constants";
import { StyledRadioProps } from "./types";

export const StyledRadio = styled.span<StyledRadioProps>`
  position: relative;
  display: inline-block;
  background-color: ${themeGet("backgroundColors.light")};
  border-color: ${themeGet("borderColors.medium")};
  border-style: solid;
  border-width: ${themeGet("borderWidths.light")};
  border-radius: 50%;

  ${variant({
    prop: "radioSize",
    variants: {
      [RadioSize.NORMAL]: {
        width: "16px",
        height: "16px",
      },
      [RadioSize.SMALL]: {
        width: "14px",
        height: "14px",
      },
    },
  })};
`;

export const HiddenRadio = styled.input.withConfig({
  shouldForwardProp: (prop, validate) => validate(prop),
})<StyledRadioProps>`
  position: absolute;
  opacity: 0;

  :checked + ${StyledRadio} {
    background-color: ${themeGet("colors.blue60")};
    border-color: ${themeGet("colors.blue60")};

    &::after {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      transform: translate(-50%, -50%);
      background-color: ${themeGet("colors.white")};
      border-radius: 50%;
      content: "";

      ${({ radioSize }) =>
        Boolean(radioSize == RadioSize.SMALL) &&
        css`
          width: 5.25px;
          height: 5.25px;
        `}
    }
  }

  &:hover {
    + ${StyledRadio} {
      background-color: ${themeGet("colors.gray20")};
    }

    :checked + ${StyledRadio} {
      background-color: ${themeGet("colors.blue70")};
      border-color: ${themeGet("colors.blue70")};
    }
  }

  &:focus {
    + ${StyledRadio} {
      border-color: ${themeGet("borderColors.focusPrimary")};
    }

    :checked + ${StyledRadio} {
      border-color: ${themeGet("colors.blue50")};
    }
  }

  :disabled {
    + ${StyledRadio} {
      background-color: ${themeGet("colors.gray30")};
      border-color: ${themeGet("colors.gray30")};

      ${({ readOnly }) =>
        readOnly &&
        css`
          background-color: ${themeGet("colors.gray10")};
          border-color: ${themeGet("borderColors.card")};
        `}
    }

    :checked + ${StyledRadio}::after {
      ${({ readOnly }) =>
        readOnly &&
        css`
          background-color: ${themeGet("colors.gray30")};
        `}
    }
  }
`;

export const StyledRadioWrapper = styled.label<MarginProps>`
  ${space}
`;
