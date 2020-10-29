import styled from "styled-components";
import { space } from "@twilio-labs/match-styling-library";
import { BoxProps } from "./types";

const StyledBox = styled("div")<BoxProps>`
  ${space};
`;

export { StyledBox };
