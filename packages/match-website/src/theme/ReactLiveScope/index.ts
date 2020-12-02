import * as React from "react";
import * as components from "@twilio-labs/match-components";
import {
  ChatIcon,
  TerminalIcon,
  OutboundIcon,
  ExpandIcon,
  DownloadIcon,
} from "@twilio-labs/match-icons-twilio";

const ReactLiveScope = {
  React,
  ...React,
  ...components,
  ChatIcon,
  TerminalIcon,
  OutboundIcon,
  ExpandIcon,
  DownloadIcon,
};

export default ReactLiveScope;
