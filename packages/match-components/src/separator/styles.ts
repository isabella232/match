import { themeGet } from "@styled-system/theme-get";
import { Separator } from "reakit/Separator";
import styled from "styled-components";
import { compose, variant, space } from "styled-system";

import { SeparatorVariant } from "./constants";
import type { SeparatorProps } from "./types";

export const StyledSeparator = styled(Separator).withConfig({
  shouldForwardProp: (prop, validate) => validate(prop),
})<SeparatorProps>`
  height: ${themeGet("components.separator.thickness")};
  background: ${themeGet("colors.gray20")};
  border: none;

  ${compose(
    space,
    variant({
      variants: {
        [SeparatorVariant.PRIMARY]: {
          opacity: "1",
        },
        [SeparatorVariant.INVERSE]: {
          opacity: "0.5",
        },
      },
    })
  )}
`;
