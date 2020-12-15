import styled from "styled-components";

const Truncate = styled.span`
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
Truncate.displayName = "Truncate";

export { Truncate };
