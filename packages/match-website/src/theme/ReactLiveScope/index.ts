import * as React from "react";
import * as components from "@twilio-labs/match-components";
import styled from "styled-components";

interface DarkPreviewProps {
  bg: "blue" | "darkest";
}

const DarkPreview = styled.div<DarkPreviewProps>`
  margin: -1rem;
  padding: 1rem;
  background: ${({ bg, theme }) => theme.background[bg].color};
  border-bottom-right-radius: var(--ifm-global-radius);
  border-bottom-left-radius: var(--ifm-global-radius);
`;

DarkPreview.defaultProps = {
  bg: "darkest",
};

const ReactLiveScope = {
  React,
  ...React,
  ...components,
  DarkPreview,
};

export default ReactLiveScope;
