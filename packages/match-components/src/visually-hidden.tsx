import styled from "styled-components";

const VisuallyHidden = styled.span`
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

export { VisuallyHidden };
