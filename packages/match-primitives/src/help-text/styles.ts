import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";
import { variant } from "styled-system";

import { StyledIcon } from "../icon";

import { HelpTextVariant } from "./constants";
import type { HelpTextProps } from "./types";

export const StyledHelpText = styled.div<HelpTextProps>`
  margin-top: ${themeGet("space.scale7")};
  font-size: ${themeGet("fontSizes.scale60")};
  line-height: ${themeGet("lineHeights.scale180")};

  ${({
    theme: {
      textColors,
      components: { form },
    },
  }) =>
    variant({
      variants: {
        [HelpTextVariant.NORMAL]: {
          color: textColors.tertiary,
          fontWeight: form.helperFontWeight,
        },
        [HelpTextVariant.ERROR]: {
          color: "red60",
          fontWeight: "medium",
        },
      },
    })}

  ${StyledIcon} {
    margin-top: -1px;
  }
`;
