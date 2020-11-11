import styled from "styled-components";
import { compose, grid, flexbox, space } from "styled-system";
import { backgroundColor } from "@twilio-labs/match-props";
import type { GridProps, CellProps } from "./types";

export const StyledGrid = styled.div<GridProps>`
  display: grid;
  ${compose(space, grid, flexbox)};
`;

export const StyledCell = styled.div<CellProps>`
  ${compose(space, flexbox, backgroundColor)}
`;
