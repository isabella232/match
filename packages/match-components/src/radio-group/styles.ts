import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { MarginProps } from "@twilio-labs/match-props";
import { space, variant } from "styled-system";
import { RadioSize } from "./constants";
import {
  StyledRadioProps,
  StyledRadioWrapperProps,
  HiddenRadioProps,
  StyledRadioGroupProps,
} from "./types";

//Wraps around and sets up a grid for all radio buttons in radio group
export const StyledRadioGroup = styled.div<StyledRadioGroupProps>`
  margin-top: ${themeGet("space.scale60")};
  > *:not(:last-child) {
    margin-bottom: ${themeGet("space.scale20")};
  }
  ${({ vertical }) =>
    vertical &&
    css`
      display: flex;
      flex-direction: column;
      @media ${themeGet("mediaQueries.medium")} {
        flex-direction: row;
        margin-bottom: ${themeGet("space.scale0")};
        > * {
          margin-right: ${themeGet("space.scale260")};
        }
      }
    `}
`;

//Wraps the entire radio group, including group label
export const StyledRadioGroupWrapper = styled.fieldset<MarginProps>`
  ${space}
  padding: ${themeGet("space.scale0")};
  border-width: 0px;
`;

export const StyledRadioLabel = styled.span`
  margin-left: ${themeGet("space.scale60")};
  font-weight: ${themeGet("components.form.radioWeight")};
  vertical-align: middle;
`;

// Aligns the radio button and the label for that button
export const StyledRadioLabelWrapper = styled.label`
  display: flex;
`;

export const StyledRadioAdditional = styled.p`
  margin-top: 0px;
  color: ${themeGet("components.form.radioAdditionalColor")};
`;

//Styled input that oes on top of the hidden one
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

//The actual input tag, which gets hidden
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

//Wraps an entire radio button
export const StyledRadioWrapper = styled.div<StyledRadioWrapperProps>`
  ${space}

  ${variant({
    prop: "radioSize",
    variants: {
      [RadioSize.NORMAL]: {
        [StyledRadio]: {
          width: "16px",
          height: "16px",
          marginTop: "6px",
        },
        [StyledRadioLabel]: {
          fontSize: "scale100",
          lineHeight: "scale220",
        },
        [StyledRadioAdditional]: {
          fontSize: "scale80",
          lineHeight: "scale140",
          fontWeight: "regular",
          pl: "28px",
        },
      },
      [RadioSize.SMALL]: {
        [StyledRadio]: {
          width: "14px",
          height: "14px",
          marginTop: "2px",
        },
        [StyledRadioLabel]: {
          fontSize: "scale80",
          lineHeight: "scale180",
        },
        [StyledRadioAdditional]: {
          fontSize: "scale60",
          lineHeight: "scale180",
          fontWeight: "medium",
          pl: "26px",
        },
      },
    },
  })};
`;
