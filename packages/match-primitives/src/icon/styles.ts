import styled from "styled-components";
import { color, compose } from "styled-system";
import { iconSize } from "@twilio-labs/match-props";
import type { IconProps } from "./types";

const StyledIcon = styled.span<IconProps>`
  display: inline-flex;
  line-height: 1;
  ${compose(color, iconSize)}
`;

export { StyledIcon };
