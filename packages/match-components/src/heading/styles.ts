import styled from "styled-components";
import { compose, space, variant } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import type { HeadingProps } from "./types";

const StyledHeading = styled.h1<HeadingProps>`
  margin: 0;
  color: ${({ inverse }) =>
    inverse
      ? themeGet("textColors.inversePrimary")
      : themeGet("textColors.primary")};
  font-family: ${themeGet("fontFamilies.heading")};

  ${({ theme, inverse }) =>
    compose(
      space,
      variant({
        variants: {
          h1: {
            fontSize: [
              "scale280",
              undefined,
              theme.components.headingH1SizeMedium,
              "scale420",
            ],
            lineHeight: "scale125",
            fontWeight: theme.components.headingH1Weight,
          },
          h2: {
            fontSize: [
              "scale220",
              undefined,
              theme.components.headingH2SizeMedium,
              theme.components.headingH2SizeLarge,
            ],
            lineHeight: "scale140",
            fontWeight: theme.components.headingH2Weight,
          },
          h3: {
            color: !inverse && theme.components.headingH3Color,
            fontSize: [
              theme.components.headingH3Size,
              undefined,
              theme.components.headingH3SizeMedium,
              theme.components.headingH3SizeLarge,
            ],
            lineHeight: theme.components.headingH3LineHeight,
            fontWeight: theme.components.headingH3Weight,
          },
          h4: {
            fontSize: "scale120",
            lineHeight: "scale180",
            fontWeight: theme.components.headingH4Weight,
          },
          h5: {
            fontSize: "scale100",
            lineHeight: "scale220",
            fontWeight: "bold",
          },
          h6: {
            fontSize: "scale80",
            lineHeight: "scale220",
            fontWeight: "bold",
          },
        },
      })
    )}
`;

export { StyledHeading };
