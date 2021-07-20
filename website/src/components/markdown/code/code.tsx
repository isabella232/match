import clsx from "clsx";
import { Formik } from "formik";
import Highlight, { defaultProps } from "prism-react-renderer";
import prismTheme from "prism-react-renderer/themes/nightOwl";
import * as React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled from "styled-components";

import * as components from "@twilio-labs/match-components";
import {
  ChatIcon,
  TerminalIcon,
  OutboundIcon,
  ExpandIcon,
  DownloadIcon,
} from "@twilio-labs/match-icons/twilio";
import { ChimeLogo } from "@twilio-labs/match-logos/color";
import { AirbnbLogo } from "@twilio-labs/match-logos/mono";
import { StyledBase } from "@twilio-labs/match-themes";
import { RainbowFlag } from "@twilio-labs/match-flags";

import { ThemeSwitcher } from "../../theme-switcher";

import {
  snippet,
  singleLine,
  liveSnippet,
  livePreview,
  themeSwitcher,
  previewContent,
} from "./code.module.css";
import type { CodeProps, PreviewProps } from "./types";

const StyledPreview = styled.div<PreviewProps>`
  background: ${({ bg, theme }) => theme.backgroundColors[bg]};
  border-color: ${({ bg, theme }) =>
    bg !== "white" && theme.backgroundColors[bg]};
`;

export const Code: React.FC<CodeProps> = ({
  children,
  lang,
  bg = "white",
  live = false,
  fullWidth = false,
}) => {
  if (live) {
    return (
      <LiveProvider
        code={children.trim()}
        scope={{
          React,
          Formik,
          ...components,
          ChatIcon,
          TerminalIcon,
          OutboundIcon,
          ExpandIcon,
          DownloadIcon,
          AirbnbLogo,
          ChimeLogo,
          RainbowFlag,
        }}
        language={lang}
        theme={prismTheme}
      >
        <StyledPreview className={livePreview} bg={bg}>
          <div className={themeSwitcher}>
            <ThemeSwitcher
              variant={bg === "white" ? "snippet" : "inverseSnippet"}
            />
          </div>
          <StyledBase
            className={previewContent}
            style={{ width: fullWidth ? "100%" : undefined }}
          >
            <LivePreview />
          </StyledBase>
        </StyledPreview>
        <div className={clsx(snippet)}>
          <div className={liveSnippet}>
            <LiveEditor style={{ background: "transparent" }} />
          </div>
        </div>
        <LiveError />
      </LiveProvider>
    );
  }
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={lang}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx(snippet, className, {
            [singleLine]: children.trim().split(/\n/g).length === 1,
          })}
          style={{ ...style, background: undefined }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
