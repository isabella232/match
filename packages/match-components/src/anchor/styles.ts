import styled, { css } from "styled-components";
import { AnchorProps, AnchorVariant } from "./types";

const variants = {
  [AnchorVariant.PRIMARY]: css`
    color: ${({ theme }) => theme.colorBlue60};

    &:hover {
      color: ${({ theme }) => theme.colorBlue70};
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.colorBlue80};
    }
  `,
  [AnchorVariant.INVERSE]: css`
    color: ${({ theme }) => theme.colorWhite};

    &:hover {
      color: ${({ theme }) => theme.colorBlue30};
    }

    &:focus {
      outline-color: ${({ theme }) => theme.colorWhite};
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.colorBlue40};
    }
  `,
  [AnchorVariant.TEXT]: css`
    color: inherit;

    &:hover {
      color: ${({ theme }) => theme.colorBlue60};
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.colorBlue70};
    }
  `,
};

const StyledAnchor = styled.a<AnchorProps>`
  text-decoration: underline;
  cursor: pointer;

  &:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: ${({ theme }) => theme.colorBlue60};
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
