import styled, { css, keyframes } from "styled-components";
import { Button } from "reakit/Button";
import { themeGet } from "@styled-system/theme-get";
import { StyledIcon } from "@twilio-labs/match-primitives";
import { ButtonSize, ButtonVariant } from "./constants";
import type { ButtonProps } from "./types";

const sizes = {
  [ButtonSize.NORMAL]: css`
    padding: ${({ theme }) =>
      `calc(${theme.space.scale100} - ${theme.borderWidths.light})
      calc(${theme.space.scale180} - ${theme.borderWidths.light})`};
    font-size: ${({ theme }) => theme.fontSizeScale100};

    ${StyledIcon} {
      width: ${({ theme }) => theme.iconSizes.medium};
      height: ${({ theme }) => theme.iconSizes.medium};
    }
  `,
  [ButtonSize.SMALL]: css`
    padding: ${({ theme }) =>
      `calc(${theme.space.scale20} - ${theme.borderWidths.light})
      calc(${theme.space.scale100} - ${theme.borderWidths.light})`};
    font-size: ${({ theme }) => theme.fontSizeScale80};

    ${StyledIcon} {
      width: ${({ theme }) => theme.iconSizes.small};
      height: ${({ theme }) => theme.iconSizes.small};
    }
  `,
  [ButtonSize.ICON]: css`
    padding: ${({ theme }) =>
      `calc(${theme.space.scale60} - ${theme.borderWidths.light})`};
    ${StyledIcon} {
      width: ${({ theme }) => theme.iconSizes.large};
      height: ${({ theme }) => theme.iconSizes.large};
      margin: 0;
    }
  `,
};

const variants = {
  [ButtonVariant.PRIMARY]: css`
    color: ${({ theme }) => theme.textColorInversePrimary};
    background: ${({ theme }) => theme.colorBlue60};
    border-color: ${({ theme }) => theme.colorBlue60};

    &:hover {
      background: ${({ theme }) => theme.colorBlue70};
      border-color: ${({ theme }) => theme.colorBlue70};
    }

    &:focus,
    &:active {
      background: ${({ theme }) => theme.colorBlue80};
      border-color: ${({ theme }) => theme.colorBlue80};
    }
  `,
  [ButtonVariant.SECONDARY]: css`
    color: ${({ theme }) => theme.colorBlue60};
    background: ${({ theme }) => theme.colorWhite};
    border-color: ${({ theme }) => theme.colorBlue60};

    &:hover {
      color: ${({ theme }) => theme.textColorInversePrimary};
      background: ${({ theme }) => theme.colorBlue60};
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.textColorInversePrimary};
      background: ${({ theme }) => theme.colorBlue70};
      border-color: ${({ theme }) => theme.colorBlue70};
    }
  `,
  [ButtonVariant.TERTIARY]: css`
    color: ${({ theme }) => theme.textColorInversePrimary};
    background: transparent;
    border-color: ${({ theme }) => theme.colorWhite};

    &:hover {
      background: ${({ theme }) => theme.colorBlue60};
      border-color: ${({ theme }) => theme.colorBlue60};
    }

    &:focus {
      outline-color: ${({ theme }) => theme.colorWhite};
    }

    &:focus,
    &:active {
      background: ${({ theme }) => theme.colorBlue70};
      border-color: ${({ theme }) => theme.colorBlue70};
    }

    &:disabled {
      color: ${({ theme }) => theme.colorGray100};
      background: ${({ theme }) => theme.colorGray40};
      border-color: ${({ theme }) => theme.colorGray40};
    }
  `,
  [ButtonVariant.INVERSE]: css`
    color: ${({ theme }) => theme.components.button.inverseText};
    background: ${({ theme }) => theme.colorWhite};
    border-color: ${({ theme }) => theme.colorWhite};

    &:hover {
      color: ${({ theme }) => theme.textColorInversePrimary};
      background: ${({ theme }) => theme.components.button.inverseHoverBg};
      border-color: ${({ theme }) => theme.components.button.inverseHoverBg};
    }

    &:focus {
      outline-color: ${({ theme }) => theme.colorWhite};
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.textColorInversePrimary};
      background: ${({ theme }) => theme.components.button.inverseFocusBg};
      border-color: ${({ theme }) => theme.components.button.inverseFocusBg};
    }

    &:disabled {
      color: ${({ theme }) => theme.colorGray100};
      background: ${({ theme }) => theme.colorGray40};
      border-color: ${({ theme }) => theme.colorGray40};
    }
  `,
};

const blink = keyframes`
  0%,
  100% { opacity: 0 }
  50% { opacity: 1 }
`;

const StyledPrompt = styled.span`
  margin-left: 1em;

  &::before {
    display: inline-block;
    width: ${({ theme }) => theme.iconSizes.small};
    height: ${({ theme }) => theme.iconSizes.small};
    border-color: currentColor;
    border-style: solid;
    border-width: 0;
    border-right-width: ${({ theme }) => theme.borderWidths.light};
    border-bottom-width: ${({ theme }) => theme.borderWidths.light};
    transform: ${({ theme: { iconSizes, borderWidths } }) =>
      `rotate(-45deg)
      translateX(calc(${iconSizes.small} - ${borderWidths.light}))
      translateY(calc(${iconSizes.small} - ${borderWidths.light}))`};
    content: "";
  }

  &::after {
    display: inline-block;
    width: ${({ theme }) => theme.iconSizes.small};
    margin-left: 0.25em;
    border-color: currentColor;
    border-style: solid;
    border-width: ${({ theme }) => theme.borderWidths.light} 0 0;
    transform: ${({ theme: { iconSizes, borderWidths } }) =>
      `translateX(calc(-${iconSizes.small} / 2))
      translateY(calc(-${iconSizes.small} / 2 + ${borderWidths.light} / 2))
      scaleX(1.5)`};
    content: "";
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
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
  }
`;

const StyledButton = styled(Button).withConfig({
  shouldForwardProp: (prop, validate) => validate(prop),
})<ButtonProps>`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  font-family: ${({ theme }) => theme.fontFamilyText};
  text-align: center;
  text-decoration: none;
  border-style: solid;
  border-width: ${({ theme }) => theme.borderWidths.light};
  border-radius: ${themeGet("radii.base")};
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: color, background, border;
  transition-timing-function: ease-in;
  line-height: ${({ theme }) => theme.fontSizes.scale100};

  &:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: ${({ theme }) => theme.colorBlue60};
    outline-offset: 2px;
    -moz-outline-radius: 4px;
  }

  &:disabled {
    color: ${({ theme }) => theme.colorGray80};
    background: ${({ theme }) => theme.colorGray10};
    border-color: ${({ theme }) => theme.colorGray10};
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

  ${StyledIcon} {
    margin-left: 0.5em;
    color: inherit;
    vertical-align: middle;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: block;
      width: 100%;
    `}

  ${({ size }) => size && sizes[size]}
  ${({ variant }) => variant && variants[variant]}
`;

export { StyledButton, StyledPrompt };
