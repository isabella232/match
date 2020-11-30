import styled from "styled-components";
import { space } from "styled-system";
import { Separator } from "reakit/Separator";
import { SeparatorProps } from ".";
import { SeparatorVariant } from "./types";

const StyledSeparator = styled(Separator).withConfig({
  shouldForwardProp: (prop, validate) => validate(prop),
})<SeparatorProps>`
  ${space};
  height: ${({ theme }) => {
    return theme.components.separatorThickness;
  }};
  background: ${({ theme }) => theme.colorGray20};
  border: none;
  opacity: ${({ variant }) =>
    variant === SeparatorVariant.INVERSE ? "0.5" : "1"};
`;

export { StyledSeparator };
