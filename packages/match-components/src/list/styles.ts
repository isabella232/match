import styled from "styled-components";
import { compose, space, variant } from "styled-system";
import { themeGet } from "@styled-system/theme-get";

import type { ListProps } from "./types";
import { ListVariant, ListSize } from "./constants";

export const StyledListItem = styled.li`
  font-weight: ${themeGet("fontWeights.regular")};
  font-size: inherit;
  line-height: ${themeGet("lineHeights.scale220")};

  ul,
  ol {
    font-size: inherit;
  }
`;

export const StyledAdditional = styled.span`
  display: block;
  font-size: 0.857em;
  line-height: ${themeGet("lineHeights.scale180")};
`;

export const StyledList = styled.ul<ListProps>`
  margin: 0;
  padding: 0;
  padding-left: 1.5em;
  color: ${({ inverse }) =>
    inverse
      ? themeGet("textColors.inversePrimary")
      : themeGet("textColors.primary")};

  ul,
  ol,
  li + li {
    margin-top: ${themeGet("space.scale20")};
  }

  ${({
    size,
    theme: {
      iconSizes: IS,
      space: SP,
      components: {
        list: { bulletIcon },
      },
    },
  }) =>
    compose(
      space,
      variant({
        variants: {
          [ListVariant.BULLETED]: {
            [`${StyledListItem}::marker`]: {
              fontSize: "0.95rem",
              lineHeight: "1",
            },
          },
          [ListVariant.ICON]: {
            listStyle: "none",
            paddingLeft: "scale0",
            [`ul, ol, li + li`]: {
              marginTop: "scale140",
            },
            ["li"]: {
              position: "relative",
              paddingLeft: `calc(${IS.base} + ${SP.scale20})`,
            },
            [`li::before`]: {
              content: "''",
              display: "block",
              width: IS.base,
              height: IS.base,
              background: bulletIcon,
              position: "absolute",
              left: 0,
              top: size === ListSize.NORMAL ? "0.375em" : "0.225em",
            },
          },
        },
      }),
      variant({
        prop: "size",
        variants: {
          [ListSize.NORMAL]: {
            fontSize: "scale100",
          },
          [ListSize.SMALL]: {
            fontSize: "scale80",
          },
        },
      })
    )}
`;
