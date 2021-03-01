import styled from "styled-components";
import { compose, variant, space, typography } from "styled-system";
import { textColor } from "@twilio-labs/match-props";
import type { ParagraphProps } from "./types";
import { ParagraphVariant } from "./constants";
import { themeGet } from "@styled-system/theme-get";

export const StyledParagraph = styled.p<ParagraphProps>`
  margin: 0;
  color: ${themeGet("components.paragraph.color")};
  font-weight: ${themeGet("fontWeights.regular")};

  ${({
    theme: {
      components: { paragraph },
    },
  }) =>
    compose(
      typography,
      space,
      textColor,
      variant({
        variants: {
          [ParagraphVariant.X_SMALL]: {
            fontSize: paragraph.fontSizeXSmall,
            fontWeight: paragraph.fontWeightXSmall,
            lineHeight: paragraph.lineHeightXSmall,
          },
          [ParagraphVariant.SMALL]: {
            fontSize: paragraph.fontSizeSmall,
            lineHeight: paragraph.lineHeightSmall,
          },
          [ParagraphVariant.MEDIUM]: {
            fontSize: paragraph.fontSizeMedium,
            lineHeight: paragraph.lineHeightMedium,
          },
          [ParagraphVariant.LARGE]: {
            fontSize: paragraph.fontSizeLarge,
            lineHeight: paragraph.lineHeightLarge,
          },
          [ParagraphVariant.X_LARGE]: {
            fontSize: paragraph.fontSizeXLarge,
            lineHeight: paragraph.lineHeightXLarge,
          },
        },
      })
    )}
`;
