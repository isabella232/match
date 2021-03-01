import styled from "styled-components";
import { variant } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { CodeVariant } from "./constants";
import type { CodeProps } from "./types";

export const StyledCode = styled.code<CodeProps>`
  padding: ${themeGet("space.scale7")} ${themeGet("space.scale20")};
  font-size: inherit;
  font-family: ${themeGet("fontFamilies.code")};
  line-height: ${themeGet("lineHeights.scale100")};
  border-style: solid;
  border-width: ${themeGet("borderWidths.thin")};
  border-radius: ${themeGet("radii.small")};

  ${variant({
    variants: {
      [CodeVariant.DARK]: {
        color: "white",
        backgroundColor: "gray90",
        borderColor: "gray90",
      },
      [CodeVariant.LIGHT]: {
        color: "gray100",
        backgroundColor: "gray10",
        borderColor: "gray20",
      },
    },
  })}
`;
