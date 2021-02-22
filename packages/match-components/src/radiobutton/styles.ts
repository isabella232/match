import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { MarginProps } from "@twilio-labs/match-props";
import { space, variant } from "styled-system";
import { RadioSize } from "./constants";
import {
  StyledRadioProps,
  StyledRadioWrapperProps,
  HiddenRadioProps,
  RadioGroupProps,
} from "./types";

export const StyledRadioGroup = styled.fieldset<RadioGroupProps>`
  display: grid;
  row-gap: ${themeGet("space.scale20")};
  padding: 0px;
  border-width: 0px;

  ${({ vertical }) =>
    vertical &&
    css`
      grid-column-gap: ${themeGet("space.scale260")};
      grid-template-columns: 1fr;

      @media ${themeGet("mediaQueries.medium")} {
        grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
      }
    `}
`;

export const StyledRadioGroupWrapper = styled.div<MarginProps>`
  ${space}
`;

export const StyledRadioLabel = styled.span`
  margin-left: ${themeGet("space.scale60")};
  font-weight: ${themeGet("components.form.radioWeight")};
  vertical-align: middle;
`;

export const StyledRadioAdditional = styled.p`
  margin-top: 0px;
  color: ${themeGet("components.form.radioAdditionalColor")};
`;

export const StyledRadio = styled.span<StyledRadioProps>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  background-color: ${themeGet("backgroundColors.light")};
  border-color: ${themeGet("borderColors.medium")};
  border-style: solid;
  border-width: ${themeGet("borderWidths.light")};
  border-radius: 50%;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${themeGet("borderColors.error")};
    `}
`;

export const HiddenRadio = styled.input.withConfig({
  shouldForwardProp: (prop, validate) => validate(prop),
})<HiddenRadioProps>`
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
      //prevent hover from working when disabled
      ${({ disabled }) =>
        !disabled &&
        css`
          background-color: ${themeGet("colors.blue70")};
          border-color: ${themeGet("colors.blue70")};
        `}
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

interface CombinedRadioWrapperProps
  extends StyledRadioWrapperProps,
    MarginProps {}

export const StyledRadioWrapper = styled.div<CombinedRadioWrapperProps>`
  ${space}

  ${variant({
    prop: "radioSize",
    variants: {
      [RadioSize.NORMAL]: {
        [StyledRadio]: {
          width: "16px",
          height: "16px",
        },
        [StyledRadioLabel]: {
          fontSize: "scale100",
          lineHeight: "scale220",
        },
        [StyledRadioAdditional]: {
          fontSize: "scale80",
          lineHeight: "scale140",
          pl: "28px",
        },
      },
      [RadioSize.SMALL]: {
        [StyledRadio]: {
          width: "14px",
          height: "14px",
        },
        [StyledRadioLabel]: {
          fontSize: "scale80",
          lineHeight: "scale180",
        },
        [StyledRadioAdditional]: {
          fontSize: "scale60",
          lineHeight: "scale125",
          pl: "26px",
        },
      },
    },
  })};
`;
