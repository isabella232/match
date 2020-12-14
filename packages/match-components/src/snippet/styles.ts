import styled, { css } from "styled-components";
import { variant, compose } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { Tooltip, TooltipArrow } from "reakit/Tooltip";
import { Tab, TabList } from "reakit/Tab";
import { StyledIcon } from "../icon/styles";
import type { StyledSnippetProps } from "./types";
import { SnippetVariant } from "./types";

const StyledSnippetHeader = styled.div<Pick<StyledSnippetProps, "variant">>`
  display: grid;
  grid-template-columns: auto max-content;
  align-items: center;
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

const StyledTooltip = styled(Tooltip)`
  padding: ${themeGet("space.scale7")} ${themeGet("space.scale20")};
  color: ${themeGet("colors.white")};
  font-weight: ${themeGet("fontWeights.light")};
  font-size: ${themeGet("fontSizes.scale60")};
  font-family: ${themeGet("fontFamilies.text")};
  background: ${themeGet("colors.blue60")};
  border-radius: 2px;
`;

const StyledTooltipArrow = styled(TooltipArrow)`
  .fill {
    fill: ${themeGet("colors.blue60")};
  }
`;

const StyledCopySuccess = styled.span`
  padding: ${themeGet("space.scale7")} ${themeGet("space.scale20")};
  color: ${themeGet("colors.gray100")};
  font-weight: ${themeGet("fontWeights.semibold")};
  font-size: ${themeGet("fontSizes.scale60")};
  line-height: ${themeGet("lineHeights.scale100")};
  background: ${themeGet("colors.green40")};
  border-radius: 2px;
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

    &:focus {
      outline-width: 2px;
      outline-style: solid;
      outline-color: ${themeGet("colors.blue60")};
      outline-offset: 2px;
      -moz-outline-radius: 4px;
    }
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

const StyledSnippetTitle = styled.div`
  padding: ${themeGet("space.scale100")} ${themeGet("space.scale260")};
  font-weight: ${themeGet("fontWeights.medium")};
  font-size: ${themeGet("fontSizes.scale60")};
  line-height: ${themeGet("lineHeights.scale140")};
`;

const StyledSnippetBody = styled.div<StyledSnippetProps>`
  padding: ${themeGet("space.scale7")};
  overflow: hidden;

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
  overflow-x: auto;
  scrollbar-width: thin;
  font-weight: ${themeGet("fontWeights.regular")};
  font-size: ${themeGet("fontSizes.scale80")};
  line-height: ${themeGet("lineHeights.scale180")};

  .linenumber {
    margin-right: ${themeGet("space.scale260")};
  }

  code {
    font-family: ${themeGet("fontFamilies.code")};
  }

  pre {
    margin: 0;
    padding: ${themeGet("space.scale100")} ${themeGet("space.scale60")};
  }

  &:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: ${themeGet("colors.blue60")};
    outline-offset: 2px;
    -moz-outline-radius: 0 0 4px 4px;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-style: solid;
    border-width: 3px;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  .shell-symbol {
    margin-right: ${themeGet("space.scale100")};
  }

  .shell-symbol + :not([class^="language"]) {
    display: none;
  }

  ${({ maxLines }) =>
    maxLines &&
    css`
      max-height: calc(
        ${maxLines}em * ${themeGet("lineHeights.scale180")} +
          ${themeGet("space.scale100")}
      );
    `}

  ${({ isSingleLine }) =>
    isSingleLine &&
    css`
      pre {
        padding: ${themeGet("space.scale20")} 0;
      }

      &:focus {
        -moz-outline-radius: 4px;
      }
    `}

  ${({ theme }) =>
    variant({
      variants: {
        [SnippetVariant.DARK]: {
          scrollbarColor: `${theme.colors.gray70} transparent`,
          ["::-webkit-scrollbar-thumb"]: {
            borderColor: "gray70",
          },
          [".shell-symbol, .linenumber"]: {
            color: "gray40",
          },
        },
        [SnippetVariant.LIGHT]: {
          scrollbarColor: `${theme.colors.gray20} transparent`,
          ["::-webkit-scrollbar-thumb"]: {
            borderColor: "gray20",
          },
          [".shell-symbol, .line-number"]: {
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

const StyledTab = styled(Tab)`
  padding: ${themeGet("space.scale20")};
  font-size: ${themeGet("fontSizes.scale80")};
  background-color: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline-width: 2px;
    outline-style: solid;
    outline-color: ${themeGet("colors.blue60")};
    outline-offset: 2px;
    -moz-outline-radius: 4px;
  }
`;

const StyledTabList = styled(TabList)`
  display: flex;
  gap: ${themeGet("space.scale180")};
  padding: ${themeGet("space.scale60")} ${themeGet("space.scale180")};
`;

const StyledSnippetGroup = styled.div<Pick<StyledSnippetProps, "variant">>`
  ${StyledSnippetTitle} {
    grid-column-end: span 2;
    border-style: solid;
    border-width: 0;
    border-bottom-width: ${themeGet("borderWidths.thin")};
  }

  ${StyledSnippet} {
    border-radius: 0 0 4px 4px;
  }

  ${variant({
    variants: {
      [SnippetVariant.DARK]: {
        [StyledSnippetTitle]: {
          borderColor: "gray80",
        },
        [StyledTab]: {
          color: "blue30",
          ["&[aria-selected=true]"]: {
            backgroundColor: "gray90",
          },
        },
      },
      [SnippetVariant.LIGHT]: {
        [StyledSnippetTitle]: {
          borderColor: "white",
        },
        [StyledTab]: {
          color: "gray100",
          ["&[aria-selected=true]"]: {
            backgroundColor: "white",
          },
        },
      },
    },
  })}
`;

export {
  StyledSnippet,
  StyledSnippetBody,
  StyledHighlighter,
  StyledSnippetHeader,
  StyledSnippetTitle,
  StyledTooltip,
  StyledTooltipArrow,
  StyledCopySuccess,
  StyledSnippetActions,
  StyledTab,
  StyledTabList,
  StyledSnippetGroup,
};
