import styled from "styled-components";
import { variant } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import type { HelpTextProps } from "./types";
import { HelpTextVariant } from "./constants";

export const StyledHelpText = styled.div<HelpTextProps>`
  margin-top: ${themeGet("space.scale7")};
  font-size: ${themeGet("fontSizes.scale60")};
  line-height: ${themeGet("lineHeights.scale180")};

  ${({
    theme: {
      textColors,
      components: { input },
    },
  }) =>
    variant({
      variants: {
        [HelpTextVariant.NORMAL]: {
          color: textColors.tertiary,
          fontWeight: input.helperFontWeight,
        },
        [HelpTextVariant.ERROR]: {
          color: "red60",
          fontWeight: "medium",
        },
      },
    })}
`;
