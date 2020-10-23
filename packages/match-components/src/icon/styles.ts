import styled from "styled-components";
import { IconProps } from "./types";

const StyledIcon = styled("span")<IconProps>`
  display: inline-block;
  color: ${(props) => props.color};
  line-height: 1;
`;

export { StyledIcon };
