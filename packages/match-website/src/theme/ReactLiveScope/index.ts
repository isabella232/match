import * as React from "react";
import * as components from "@twilio-labs/match-components";
import { ChatIcon, TerminalIcon } from "@twilio-labs/match-icons-twilio";
import { FlexIcon } from "@twilio-labs/match-icons-product";

const ReactLiveScope = {
  React,
  ...React,
  ...components,
  ChatIcon,
  TerminalIcon,
  FlexIcon,
};

export default ReactLiveScope;
