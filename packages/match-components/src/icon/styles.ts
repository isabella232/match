import styled from "styled-components";
import { color, iconSize } from "@twilio-labs/match-styling-library";
import { IconProps } from "./types";

const StyledIcon = styled("span")<IconProps>`
  ${color}
  ${iconSize}
  display: inline-block;
  line-height: 1;
`;

export { StyledIcon };
