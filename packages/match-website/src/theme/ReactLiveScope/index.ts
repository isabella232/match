import * as React from "react";
import * as components from "@twilio-labs/match-components";
import styled from "styled-components";

const DarkPreview = styled.div`
  margin: -1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.background.blue.color};
  border-bottom-right-radius: var(--ifm-global-radius);
  border-bottom-left-radius: var(--ifm-global-radius);
`;

const ReactLiveScope = {
  React,
  ...React,
  ...components,
  DarkPreview,
};

export default ReactLiveScope;
