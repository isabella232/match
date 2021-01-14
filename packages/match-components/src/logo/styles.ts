import styled from "styled-components";
import { color, compose, system } from "styled-system";
import type { LogoProps, ColorLogoProps } from "./types";

const StyledLogo = styled.span<LogoProps>`
  svg {
    ${compose(color, system({ maxHeight: true }))}
  }
`;

const StyledColorLogo = styled.span<ColorLogoProps>`
  svg {
    ${system({ maxHeight: true })}
  }
`;

export { StyledLogo, StyledColorLogo };
