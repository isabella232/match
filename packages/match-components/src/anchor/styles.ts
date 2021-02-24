import styled, { css } from "styled-components";
import { StyledIcon } from "@twilio-labs/match-primitives";
import { AnchorVariant } from "./constants";
import type { AnchorProps } from "./types";

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

export const StyledAnchor = styled.a<AnchorProps>`
  text-decoration: underline;
  cursor: pointer;

  &:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: ${({ theme }) => theme.colorBlue60};
    outline-offset: 2px;
    -moz-outline-radius: 4px;
  }

  ${StyledIcon} {
    width: 0.75em;
    height: 0.75em;
    margin-bottom: 0.15em;
    margin-left: 0.5em;
    color: inherit;
    vertical-align: middle;
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
