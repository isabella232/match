import styled from "styled-components";
import { space, color, shadow } from "@twilio-labs/match-styling-library";
import { BoxProps } from "./types";

const StyledBox = styled("div")<BoxProps>`
  ${space};
  ${color};
  ${shadow};
`;

export { StyledBox };
