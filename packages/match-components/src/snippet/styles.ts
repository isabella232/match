import styled, { css } from "styled-components";
import { variant, compose } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { Tooltip, TooltipArrow } from "reakit/Tooltip";
import { StyledIcon } from "../icon/styles";
import type { StyledSnippetProps } from "./types";
import { SnippetVariant } from "./types";

const StyledSnippetHeader = styled.div<Pick<StyledSnippetProps, "variant">>`
  display: grid;
  grid-template-columns: auto max-content;
  align-items: center;
  padding: ${themeGet("space.scale60")} ${themeGet("space.scale260")};
  font-weight: ${themeGet("fontWeights.medium")};
  font-size: ${themeGet("fontSizes.scale60")};
  border-radius: 4px 4px 0 0;

  ${variant({
    variants: {
      [SnippetVariant.DARK]: {
        color: "gray40",
        backgroundColor: "gray100",
      },
      [SnippetVariant.LIGHT]: {
        color: "gray80",
        backgroundColor: "gray20",
      },
    },
  })}
`;

const StyledSnippetTooltip = styled(Tooltip)`
  padding: ${themeGet("space.scale7")} ${themeGet("space.scale20")};
  color: ${themeGet("colors.white")};
  font-weight: ${themeGet("fontWeights.light")};
  font-size: ${themeGet("fontSizes.scale60")};
  font-family: ${themeGet("fontFamilies.text")};
  background: ${themeGet("colors.blue60")};
  border-radius: 2px;
`;

const StyledSnippetTooltipArrow = styled(TooltipArrow)`
  .fill {
    fill: ${themeGet("colors.blue60")};
  }
`;

const StyledSnippetActions = styled.div<Pick<StyledSnippetProps, "variant">>`
  display: flex;
  align-items: center;
  padding-right: ${themeGet("space.scale180")};
  column-gap: ${themeGet("space.scale180")};

  a,
  button {
    padding: 0;
    line-height: 1;
    background: none;
    border: none;
    cursor: pointer;
  }

  ${variant({
    variants: {
      [SnippetVariant.DARK]: {
        [StyledIcon]: {
          color: "gray10",
        },
      },
      [SnippetVariant.LIGHT]: {
        [StyledIcon]: {
          color: "gray80",
        },
      },
    },
  })}
`;

const StyledSnippetBody = styled.div<StyledSnippetProps>`
  overflow: hidden;
  font-weight: ${themeGet("fontWeights.light")};
  font-size: ${themeGet("fontSizes.scale80")};

  ${({ isSingleLine }) =>
    isSingleLine &&
    css`
      position: relative;
      padding: ${themeGet("space.scale7")} ${themeGet("space.scale100")};

      ::before,
      ::after {
        position: absolute;
        top: ${themeGet("space.scale60")};
        bottom: ${themeGet("space.scale60")};
        width: 10%;
        transition: opacity linear 0.1s;
        content: "";
        pointer-events: none;
      }

      ::before {
        left: ${themeGet("space.scale100")};
      }

      ::after {
        right: ${themeGet("space.scale100")};
      }

      ${({ theme }) =>
        compose(
          variant({
            variants: {
              [SnippetVariant.DARK]: {
                ["::before"]: {
                  background: `linear-gradient(
                  to right,
                  ${theme.colors.gray90} 0%,
                  rgba(31, 48, 76, 0) 100%
                )`,
                },
                ["::after"]: {
                  background: `linear-gradient(
                  to left,
                  ${theme.colors.gray90} 0%,
                  rgba(31, 48, 76, 0) 100%
                )`,
                },
              },
              [SnippetVariant.LIGHT]: {
                ["::before"]: {
                  background: `linear-gradient(
                  to right,
                  ${theme.colors.gray10} 0%,
                  rgba(244,244,246,0) 100%
                )`,
                },
                ["::after"]: {
                  background: `linear-gradient(
                  to left,
                  ${theme.colors.gray10} 0%,
                  rgba(244,244,246,0) 100%
                )`,
                },
              },
            },
          }),
          variant({
            prop: "verticalScrollPos",
            variants: {
              left: {
                ["::before"]: {
                  opacity: 0,
                },
              },
              right: {
                ["::after"]: {
                  opacity: 0,
                },
              },
            },
          })
        )}
    `}
`;

const StyledHighlighter = styled.div<StyledSnippetProps>`
  padding: ${themeGet("space.scale140")} ${themeGet("space.scale100")};
  overflow-x: auto;
  font-family: ${themeGet("fontFamilies.code")};
  scrollbar-width: thin;

  pre {
    margin: 0;
  }

  ::-webkit-scrollbar {
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
  }

  ${({ isSingleLine }) =>
    isSingleLine &&
    css`
      padding: ${themeGet("space.scale20")} 0;
    `}

  ${({ theme }) =>
    variant({
      variants: {
        [SnippetVariant.DARK]: {
          scrollbarColor: `${theme.colors.gray70} transparent`,
          ["::-webkit-scrollbar-thumb"]: {
            background: "gray70",
          },
          [".shell-symbol"]: {
            color: "gray40",
          },
        },
        [SnippetVariant.LIGHT]: {
          scrollbarColor: `${theme.colors.gray20} transparent`,
          ["::-webkit-scrollbar-thumb"]: {
            background: "gray20",
          },
          [".shell-symbol"]: {
            color: "gray80",
          },
        },
      },
    })}
`;

const StyledSnippet = styled.div<StyledSnippetProps>`
  border-radius: 4px;

  ${({ isSingleLine }) =>
    isSingleLine &&
    css`
      display: grid;
      grid-template-columns: auto max-content;
    `}

  ${variant({
    variants: {
      [SnippetVariant.LIGHT]: {
        color: "gray100",
        backgroundColor: "gray10",
      },
      [SnippetVariant.DARK]: {
        color: "white",
        backgroundColor: "gray90",
      },
    },
  })}
`;

const StyledSnippetGroup = styled.div`
  ${StyledSnippet} {
    border-radius: 0 0 4px 4px;
  }
`;

export {
  StyledSnippet,
  StyledSnippetBody,
  StyledHighlighter,
  StyledSnippetHeader,
  StyledSnippetTooltip,
  StyledSnippetTooltipArrow,
  StyledSnippetActions,
  StyledSnippetGroup,
};
