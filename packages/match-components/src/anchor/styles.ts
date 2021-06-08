import styled, { css } from "styled-components";
import { space, variant, compose } from "styled-system";
import { AnchorVariant } from "./constants";
import type { AnchorProps } from "./types";

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

  ${({ theme }) =>
    compose(
      space,
      variant({
        variants: {
          [AnchorVariant.PRIMARY]: {
            color: "blue60",
            ["&:hover"]: {
              color: "blue70",
            },
            ["&:focus, &:active"]: {
              color: "blue80",
            },
          },
          [AnchorVariant.INVERSE]: {
            color: "white",
            ["&:hover"]: {
              color: "blue30",
            },
            ["&:focus"]: {
              outlineColor: theme.colors.white,
            },
            ["&:focus, &:active"]: {
              color: "blue40",
            },
          },
          [AnchorVariant.TEXT]: {
            color: "inherit",
            ["&:hover"]: {
              color: "blue60",
            },
            ["&:focus, &:active"]: {
              color: "blue70",
            },
          },
        },
      })
    )}
`;
