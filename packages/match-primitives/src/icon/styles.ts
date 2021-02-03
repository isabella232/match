import styled from "styled-components";
import { color, space, compose } from "styled-system";
import { iconSize } from "@twilio-labs/match-props";
import type { IconProps } from "./types";

const StyledIcon = styled.span<IconProps>`
  display: inline-flex;
  line-height: 1;
  vertical-align: middle;
  ${compose(color, space, iconSize)}
`;

export { StyledIcon };
