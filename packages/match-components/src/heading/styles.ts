import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";
import { compose, space, variant } from "styled-system";
import { HeadingVariant } from "./constants";
import type { HeadingProps } from "./types";

export const StyledHeading = styled.h1<HeadingProps>`
  margin: 0;
  color: ${({ inverse }) =>
    inverse
      ? themeGet("textColors.inversePrimary")
      : themeGet("textColors.primary")};
  font-family: ${themeGet("fontFamilies.heading")};

  ${({
    theme: {
      components: { heading },
    },
    inverse,
  }) =>
    compose(
      space,
      variant({
        variants: {
          [HeadingVariant.H1]: {
            fontSize: ["scale280", undefined, heading.h1SizeMedium, "scale420"],
            lineHeight: "scale125",
            fontWeight: heading.h1Weight,
          },
          [HeadingVariant.H2]: {
            fontSize: [
              "scale220",
              undefined,
              heading.h2SizeMedium,
              heading.h2SizeLarge,
            ],
            lineHeight: "scale140",
            fontWeight: heading.h2Weight,
          },
          [HeadingVariant.H3]: {
            color: !inverse && heading.h3Color,
            fontSize: [
              heading.h3Size,
              undefined,
              heading.h3SizeMedium,
              heading.h3SizeLarge,
            ],
            lineHeight: heading.h3LineHeight,
            fontWeight: heading.h3Weight,
          },
          [HeadingVariant.H4]: {
            fontSize: "scale120",
            lineHeight: "scale180",
            fontWeight: heading.h4Weight,
          },
          [HeadingVariant.H5]: {
            fontSize: "scale100",
            lineHeight: "scale220",
            fontWeight: "bold",
          },
          [HeadingVariant.H6]: {
            fontSize: "scale80",
            lineHeight: "scale220",
            fontWeight: "bold",
          },
        },
      })
    )}
`;
