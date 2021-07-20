import styled from "styled-components";

import type { VisuallyHiddenProps } from "./types";

const StyledVisuallyHidden = styled.span<VisuallyHiddenProps>`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  text-transform: none;
  border: 0;
  clip: rect(0 0 0 0);
`;

export { StyledVisuallyHidden };
