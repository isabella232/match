import { themeGet } from "@styled-system/theme-get";
import styled, { css } from "styled-components";
import { compose, space, variant } from "styled-system";
import { MarginProps } from "@twilio-labs/match-props";
import { RadioSize } from "./constants";
import {
  StyledRadioProps,
  StyledRadioWrapperProps,
  StyledRadioGroupProps,
} from "./types";

export const StyledRadioGroup = styled.div<StyledRadioGroupProps>`
  margin-top: ${themeGet("space.scale60")};
  > *:not(:last-child) {
    margin-bottom: ${themeGet("space.scale20")};
  }
  ${({ horizontal }) =>
    horizontal &&
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

  ${({ hasError }) =>
    hasError &&
    css`
      margin-bottom: ${themeGet("space.scale20")};
    `}
`;

export const StyledRadioGroupWrapper = styled.fieldset<MarginProps>`
  ${space}
  margin: ${themeGet("space.scale0")};
  padding: ${themeGet("space.scale0")};
  border-width: 0px;
`;

export const StyledRadioLabel = styled.label`
  font-weight: ${themeGet("components.form.radioWeight")};
`;

export const StyledRadioAdditional = styled.p`
  margin: ${themeGet("space.scale0")};
  color: ${themeGet("components.form.radioAdditionalColor")};
`;

export const StyledRadioTextWrapper = styled.div`
  margin-left: ${themeGet("space.scale60")};
`;

export const StyledRadio = styled.span<StyledRadioProps>`
  position: relative;
  display: inline-block;
  background-color: ${themeGet("backgroundColors.light")};
  border-color: ${themeGet("borderColors.medium")};
  border-style: solid;
  border-width: ${themeGet("borderWidths.light")};
  border-radius: 50%;

  &:hover {
    /* prevent hover for disabled and read only checked */
    ${({ disabled, readOnly }) =>
      !disabled &&
      !readOnly &&
      css`
        background-color: ${themeGet("colors.gray20")};
      `}

    ${({ checked, disabled, readOnly }) =>
      checked &&
      !disabled &&
      !readOnly &&
      css`
        background-color: ${themeGet("colors.blue70")};
        border-color: ${themeGet("colors.blue70")};
      `}
  }

  &:focus-within,
  &:active {
    border-color: ${themeGet("borderColors.focusPrimary")};

    ${({ checked }) =>
      checked &&
      css`
        border-color: ${themeGet("colors.blue50")};
      `}
  }

  ${({ readOnly, disabled }) =>
    readOnly &&
    !disabled &&
    css`
      background-color: ${themeGet("colors.gray10")};
      border-color: ${themeGet("borderColors.card")};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      background-color: ${themeGet("colors.gray30")};
      border-color: ${themeGet("colors.gray30")};
    `}

    ${({ checked }) =>
    checked &&
    css`
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
      }
    `}

    ${({ checked, radioSize }) =>
    checked &&
    Boolean(radioSize == RadioSize.SMALL) &&
    css`
      width: 5.25px;
      height: 5.25px;
    `}

    ${({ checked, readOnly, disabled }) =>
    checked &&
    readOnly &&
    !disabled &&
    css`
      background-color: ${themeGet("colors.gray10")};
      border-color: ${themeGet("borderColors.card")};
      &::after {
        background-color: ${themeGet("colors.gray30")};
      }
    `}

    ${({ checked, disabled }) =>
    checked &&
    disabled &&
    css`
      pointer-events: none;
      background-color: ${themeGet("colors.gray30")};
      border-color: ${themeGet("colors.gray30")};
      &::after {
        background-color: ${themeGet("colors.gray10")};
      }
    `}

    ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${themeGet("borderColors.error")};
    `}
`;

export const HiddenRadio = styled.input`
  position: absolute;
  top: -${themeGet("borderWidths.light")};
  left: -${themeGet("borderWidths.light")};
  width: calc(100% + ${themeGet("borderWidths.light")} * 2);
  height: calc(100% + ${themeGet("borderWidths.light")} * 2);
  margin: 0;
  opacity: 0;
  appearance: none;
`;

export const StyledRadioWrapper = styled.div<StyledRadioWrapperProps>`
  display: flex;
  ${compose(
    space,
    variant({
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
          },
        },
        [RadioSize.SMALL]: {
          [StyledRadio]: {
            width: "14px",
            height: "14px",
            marginTop: "4px",
          },
          [StyledRadioLabel]: {
            fontSize: "scale80",
            lineHeight: "scale180",
          },
          [StyledRadioAdditional]: {
            fontSize: "scale60",
            lineHeight: "scale180",
            fontWeight: "medium",
          },
        },
      },
    })
  )}
`;
