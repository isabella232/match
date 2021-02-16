import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { MarginProps } from "@twilio-labs/match-props";
import { space } from "styled-system";

export const StyledRadio = styled.span`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${themeGet("backgroundColors.light")};
  border-color: ${themeGet("borderColors.medium")};
  border-style: solid;
  border-width: ${themeGet("borderWidths.light")};
  border-radius: 50%;
`;

export const HiddenRadio = styled.input.withConfig({
  shouldForwardProp: (prop, validate) => validate(prop),
})`
  position: absolute;
  opacity: 0;

  :checked + ${StyledRadio} {
    background-color: ${themeGet("colors.blue60")};
    border-color: ${themeGet("colors.blue60")};

    &::after {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin-bottom: 6px;
      margin-left: 3px;
      background-color: ${themeGet("colors.white")};
      border-radius: 50%;
      content: "";
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
    }

    :checked + ${StyledRadio}::after {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin-bottom: 6px;
      margin-left: 3px;
      background: ${themeGet("colors.gray10")};
      border-radius: 50%;
      content: "";
    }
  }
`;

export const StyledRadioWrapper = styled.label<MarginProps>`
  ${space}
`;
