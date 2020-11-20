import * as React from "react";
import * as components from "@twilio-labs/match-components";
import { ChatIcon, TerminalIcon } from "@twilio-labs/match-icons-twilio";

const ReactLiveScope = {
  React,
  ...React,
  ...components,
  ChatIcon,
  TerminalIcon,
};

export default ReactLiveScope;
