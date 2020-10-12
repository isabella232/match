import styled, { css } from "styled-components";
import { AnchorProps, AnchorVariant } from "./types";

const variants = {
  [AnchorVariant.TEXT]: css`
    color: ${({ theme }) => theme.swatch.blue60.color};

    &:hover {
      color: ${({ theme }) => theme.swatch.blue70.color};
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.swatch.blue80.color};
    }
  `,
  [AnchorVariant.INVERSE]: css`
    color: ${({ theme }) => theme.swatch.white.color};

    &:hover {
      color: ${({ theme }) => theme.swatch.blue30.color};
    }

    &:focus {
      outline-color: ${({ theme }) => theme.swatch.white.color};
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.swatch.blue40.color};
    }
  `,
};

const StyledAnchor = styled("a")<AnchorProps>`
  cursor: pointer;

  &:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: ${({ theme }) => theme.swatch.blue60.color};
    outline-offset: 2px;
    -moz-outline-radius: 4px;
  }
  ${({ noUnderline }) =>
    noUnderline &&
    css`
      text-decoration: none;
      &:hover,
      &:focus,
      &:active {
        text-decoration: underline;
      }
    `}
  ${({ variant }) => variant && variants[variant]}
`;

export { StyledAnchor };
