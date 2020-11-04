import styled, { css } from "styled-components";
import { Button } from "reakit/Button";
import { ButtonProps, ButtonSize, ButtonVariant } from "./types";

const sizes = {
  [ButtonSize.NORMAL]: css`
    padding: calc(16px - 2px) calc(24px - 2px);
    font-size: ${({ theme }) => theme.fontSizeScale100};
  `,
  [ButtonSize.SMALL]: css`
    padding: calc(8px - 2px) calc(16px - 2px);
    font-size: ${({ theme }) => theme.fontSizeScale80};
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
    color: ${({ theme }) => theme.components.buttonInverseText};
    background: ${({ theme }) => theme.colorWhite};
    border-color: ${({ theme }) => theme.colorWhite};

    &:hover {
      color: ${({ theme }) => theme.textColorInversePrimary};
      background: ${({ theme }) => theme.components.buttonInverseHoverBg};
      border-color: ${({ theme }) => theme.components.buttonInverseHoverBg};
    }

    &:focus {
      outline-color: ${({ theme }) => theme.colorWhite};
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.textColorInversePrimary};
      background: ${({ theme }) => theme.components.buttonInverseFocusBg};
      border-color: ${({ theme }) => theme.components.buttonInverseFocusBg};
    }

    &:disabled {
      color: ${({ theme }) => theme.colorGray100};
      background: ${({ theme }) => theme.colorGray40};
      border-color: ${({ theme }) => theme.colorGray40};
    }
  `,
};

const StyledButton = styled(Button).withConfig({
  shouldForwardProp: (prop, validate) => validate(prop),
})<ButtonProps>`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  font-family: ${({ theme }) => theme.fontFamilyText};
  text-align: center;
  text-decoration: none;
  border-style: solid;
  border-width: 2px;
  border-radius: 4px;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: color, background, border;
  transition-timing-function: ease-in;

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

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: block;
      width: 100%;
    `}

  ${({ size }) => size && sizes[size]}
  ${({ variant }) => variant && variants[variant]}
`;

export { StyledButton };
