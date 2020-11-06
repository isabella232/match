import styled from "styled-components";
import { space } from "styled-system";
import { BoxProps } from "./types";

const StyledBox = styled("div")<BoxProps>`
  ${space};
`;

export { StyledBox };
