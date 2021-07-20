import { themeGet } from "@styled-system/theme-get";
import { Button } from "reakit/Button";
import styled, { css, keyframes } from "styled-components";
import { compose, space, variant } from "styled-system";

import { ButtonSize, ButtonVariant } from "./constants";
import type { ButtonProps } from "./types";

const blink = keyframes`
  0%,
  100% { opacity: 0 }
  50% { opacity: 1 }
`;

export const StyledPrompt = styled.span`
  margin-left: 1em;

  &::before {
    display: inline-block;
    width: ${themeGet("iconSizes.small")};
    height: ${themeGet("iconSizes.small")};
    border-color: currentColor;
    border-style: solid;
    border-width: 0;
    border-right-width: ${themeGet("borderWidths.light")};
    border-bottom-width: ${themeGet("borderWidths.light")};
    transform: ${({ theme: { iconSizes, borderWidths } }) =>
      `rotate(-45deg)
      translateX(calc(${iconSizes.small} - ${borderWidths.light}))
      translateY(calc(${iconSizes.small} - ${borderWidths.light}))`};
    content: "";
  }

  &::after {
    display: inline-block;
    width: ${themeGet("iconSizes.small")};
    margin-left: 0.25em;
    border-color: currentColor;
    border-style: solid;
    border-width: ${themeGet("borderWidths.light")} 0 0;
    transform: ${({ theme: { iconSizes, borderWidths } }) =>
      `translateX(calc(-${iconSizes.small} / 2))
      translateY(calc(-${iconSizes.small} / 2 + ${borderWidths.light} / 2))
      scaleX(1.5)`};
    content: "";
  }

  @media ${themeGet("mediaQueries.medium")} {
    &::before {
      transform: ${({ theme }) =>
        `rotate(-45deg)
          translateY(calc(-${theme.borderWidths.light} / 2))`};
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &::after {
      transform: none;
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
      animation: ${blink} 1.1s infinite;
    }

    @media (prefers-reduced-motion) {
      &::before {
        transition: none;
      }

      &::after {
        transition: none;
        animation: none;
      }
    }
  }
`;

export const StyledButton = styled(Button).withConfig({
  shouldForwardProp: (prop, validate) => validate(prop),
})<ButtonProps>`
  display: inline-block;
  font-weight: ${themeGet("fontWeights.medium")};
  font-family: ${themeGet("fontFamilies.text")};
  line-height: ${themeGet("fontSizes.scale100")};
  text-align: center;
  text-decoration: none;
  border-style: solid;
  border-width: ${themeGet("borderWidths.light")};
  border-radius: ${themeGet("radii.base")};
  cursor: pointer;
  transition-timing-function: ease-in;
  transition-duration: 0.2s;
  transition-property: color, background, border;

  &:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: ${themeGet("colors.blue60")};
    outline-offset: 2px;
    -moz-outline-radius: 4px;
  }

  &:disabled {
    color: ${themeGet("colors.gray80")};
    background: ${themeGet("colors.gray10")};
    border-color: ${themeGet("colors.gray10")};
    cursor: not-allowed;
  }

  &:hover ${StyledPrompt} {
    &::before {
      transform: ${({ theme: { iconSizes, borderWidths } }) =>
        `rotate(-45deg)
        translateX(calc(${iconSizes.small} - ${borderWidths.light}))
        translateY(calc(${iconSizes.small} - ${borderWidths.light}))`};
    }

    &::after {
      transform: ${({ theme: { iconSizes, borderWidths } }) =>
        `translateX(calc(-${iconSizes.small} / 2))
        translateY(calc(-${iconSizes.small} / 2 + ${borderWidths.light} / 2))
        scaleX(1.5)`};
      animation: none;
    }
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: block;
      width: 100%;
    `}

  ${({ theme }) =>
    compose(
      space,
      variant({
        variants: {
          [ButtonVariant.PRIMARY]: {
            color: theme.textColorInversePrimary,
            backgroundColor: "blue60",
            borderColor: "blue60",
            ["&:hover"]: {
              backgroundColor: "blue70",
              borderColor: "blue70",
            },

            ["&:focus, &:active"]: {
              backgroundColor: "blue80",
              borderColor: "blue80",
            },
          },
          [ButtonVariant.SECONDARY]: {
            color: "blue60",
            backgroundColor: "white",
            borderColor: "blue60",

            ["&:hover"]: {
              color: theme.textColors.inversePrimary,
              backgroundColor: "blue60",
            },

            ["&:focus, &:active"]: {
              color: theme.textColors.inversePrimary,
              backgroundColor: "blue70",
              borderColor: "blue70",
            },
          },
          [ButtonVariant.TERTIARY]: {
            color: theme.textColors.inversePrimary,
            backgroundColor: "transparent",
            borderColor: "white",

            ["&:hover"]: {
              backgroundColor: "blue60",
              borderColor: "blue60",
            },

            ["&:focus"]: {
              outlineColor: theme.colors.white,
            },

            ["&:focus, &:active"]: {
              backgroundColor: "blue70",
              borderColor: "blue70",
            },

            ["&:disabled"]: {
              color: "gray100",
              backgroundColor: "gray40",
              borderColor: "gray40",
            },
          },
          [ButtonVariant.INVERSE]: {
            color: theme.components.button.inverseText,
            backgroundColor: "white",
            borderColor: "white",

            ["&:hover"]: {
              color: theme.textColors.inversePrimary,
              backgroundColor: theme.components.button.inverseHoverBg,
              borderColor: theme.components.button.inverseHoverBg,
            },

            ["&:focus"]: {
              outlineColor: theme.colors.white,
            },

            ["&:focus, &:active"]: {
              color: theme.textColors.inversePrimary,
              backgroundColor: theme.components.button.inverseFocusBg,
              borderColor: theme.components.button.inverseFocusBg,
            },

            ["&:disabled"]: {
              color: "gray100",
              backgroundColor: "gray40",
              borderColor: "gray40",
            },
          },
        },
      }),
      variant({
        prop: "size",
        variants: {
          [ButtonSize.NORMAL]: {
            paddingY: `calc(${theme.space.scale100} - ${theme.borderWidths.light})`,
            paddingX: `calc(${theme.space.scale180} - ${theme.borderWidths.light})`,
            fontSize: "scale100",
          },
          [ButtonSize.SMALL]: {
            paddingY: `calc(${theme.space.scale20} - ${theme.borderWidths.light})`,
            paddingX: `calc(${theme.space.scale100} - ${theme.borderWidths.light})`,
            fontSize: "scale80",
          },
          [ButtonSize.ICON]: {
            padding: `calc(${theme.space.scale60} - ${theme.borderWidths.light})`,
          },
        },
      })
    )};
`;
