import styled, { css } from "styled-components";
import { Button } from "reakit/Button";
import { ButtonProps, ButtonSize, ButtonVariant } from "./types";

const sizes = {
  [ButtonSize.NORMAL]: css`
    padding: calc(16px - 2px) calc(24px - 2px);
    font-size: ${({ theme }) => theme.fontSize.scale100.rem};
  `,
  [ButtonSize.SMALL]: css`
    padding: calc(8px - 2px) calc(16px - 2px);
    font-size: ${({ theme }) => theme.fontSize.scale80.rem};
  `,
};

const variants = {
  [ButtonVariant.PRIMARY]: css`
    color: ${({ theme }) => theme.text.inversePrimary.color};
    background: ${({ theme }) => theme.swatch.blue60.color};
    border-color: ${({ theme }) => theme.swatch.blue60.color};

    &:hover {
      background: ${({ theme }) => theme.swatch.blue70.color};
      border-color: ${({ theme }) => theme.swatch.blue70.color};
    }

    &:focus,
    &:active {
      background: ${({ theme }) => theme.swatch.blue80.color};
      border-color: ${({ theme }) => theme.swatch.blue80.color};
    }
  `,
  [ButtonVariant.SECONDARY]: css`
    color: ${({ theme }) => theme.swatch.blue60.color};
    background: ${({ theme }) => theme.swatch.white.color};
    border-color: ${({ theme }) => theme.swatch.blue60.color};

    &:hover {
      color: ${({ theme }) => theme.text.inversePrimary.color};
      background: ${({ theme }) => theme.swatch.blue60.color};
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.text.inversePrimary.color};
      background: ${({ theme }) => theme.swatch.blue70.color};
      border-color: ${({ theme }) => theme.swatch.blue70.color};
    }
  `,
  [ButtonVariant.TERTIARY]: css`
    color: ${({ theme }) => theme.text.inversePrimary.color};
    background: transparent;
    border-color: ${({ theme }) => theme.swatch.white.color};

    &:hover {
      background: ${({ theme }) => theme.swatch.blue60.color};
      border-color: ${({ theme }) => theme.swatch.blue60.color};
    }

    &:focus {
      outline-color: ${({ theme }) => theme.swatch.white.color};
    }

    &:focus,
    &:active {
      background: ${({ theme }) => theme.swatch.blue70.color};
      border-color: ${({ theme }) => theme.swatch.blue70.color};
    }
  `,
  [ButtonVariant.INVERSE]: css`
    color: ${({ theme }) => theme.swatch.blue60.color};
    background: ${({ theme }) => theme.swatch.white.color};
    border-color: ${({ theme }) => theme.swatch.white.color};

    &:hover {
      color: ${({ theme }) => theme.text.inversePrimary.color};
      background: ${({ theme }) => theme.swatch.blue90.color};
      border-color: ${({ theme }) => theme.swatch.blue90.color};
    }

    &:focus {
      outline-color: ${({ theme }) => theme.swatch.white.color};
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.text.inversePrimary.color};
      background: ${({ theme }) => theme.swatch.blue100.color};
      border-color: ${({ theme }) => theme.swatch.blue100.color};
    }
  `,
};

const StyledButton = styled(Button)<ButtonProps>`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight.medium.value};
  font-family: ${({ theme }) => theme.fontFamily.text};
  text-align: center;
  text-decoration: none;
  border-style: solid;
  border-width: 2px;
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: ${({ theme }) => theme.swatch.blue60.color};
    outline-offset: 2px;
    -moz-outline-radius: 4px;
  }

  &:disabled {
    color: ${({ theme }) => theme.swatch.gray80.color};
    background: ${({ theme }) => theme.swatch.gray10.color};
    border-color: ${({ theme }) => theme.swatch.gray10.color};
    cursor: not-allowed;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: block;
      width: 100%;
    `}

  ${({ size }) => size && sizes[size]}
  ${({ variant }) =>
    variant && variants[variant]}
`;

export { StyledButton };
