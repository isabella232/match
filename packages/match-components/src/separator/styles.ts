import styled from "styled-components";
import { space } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { Separator } from "reakit/Separator";
import { SeparatorProps } from ".";
import { SeparatorVariant } from "./types";

const StyledSeparator = styled(Separator).withConfig({
  shouldForwardProp: (prop, validate) => validate(prop),
})<SeparatorProps>`
  ${space};
  height: ${themeGet("components.separator.thickness")};
  background: ${themeGet("colors.gray20")};
  border: none;
  opacity: ${({ variant }) =>
    variant === SeparatorVariant.INVERSE ? "0.5" : "1"};
`;

export { StyledSeparator };
