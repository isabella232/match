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
  [AnchorVariant.NOUNDERLINE]: css`
    color: ${({ theme }) => theme.swatch.blue60.color};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.swatch.blue70.color};
      text-decoration: underline;
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.swatch.blue80.color};
      text-decoration: underline;
    }
  `,
  [AnchorVariant.NOUNDERLINEINVERSE]: css`
    color: ${({ theme }) => theme.swatch.white.color};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.swatch.blue30.color};
      text-decoration: underline;
    }

    &:focus {
      outline-color: ${({ theme }) => theme.swatch.white.color};
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.text.inversePrimary.color};
      text-decoration: underline;
    }
  `,
};

const StyledAnchor = styled("a").withConfig({
  shouldForwardProp: (prop, validate) => validate(prop),
})<AnchorProps>`
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: color;
  transition-timing-function: ease-in;

  &:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: ${({ theme }) => theme.swatch.blue60.color};
    outline-offset: 2px;
    -moz-outline-radius: 4px;
  }

  ${({ variant }) => variant && variants[variant]}
`;

export { StyledAnchor };
