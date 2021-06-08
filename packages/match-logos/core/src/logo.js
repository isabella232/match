import styled from "styled-components";
import { space, color, compose, system } from "styled-system";

export const StyledLogo = styled.span.withConfig({
  shouldForwardProp: (prop, validate) =>
    !["color"].includes(prop) && validate(prop),
})`
  display: inline-flex;
  line-height: 1;
  vertical-align: middle;
  ${compose(space, color)}
  svg {
    ${system({ maxHeight: true })}
  }
`;

export const StyledColorLogo = styled.span`
  display: inline-flex;
  line-height: 1;
  vertical-align: middle;
  ${space}
  svg {
    ${system({ maxHeight: true })}
  }
`;
