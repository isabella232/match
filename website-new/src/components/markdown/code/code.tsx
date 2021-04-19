import * as React from "react";
import clsx from "clsx";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import prismTheme from "prism-react-renderer/themes/nightOwl";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Formik } from "formik";
import { StyledBase, ThemeVariants } from "@twilio-labs/match-themes";
import * as components from "@twilio-labs/match-components";
import {
  ChatIcon,
  TerminalIcon,
  OutboundIcon,
  ExpandIcon,
  DownloadIcon,
} from "@twilio-labs/match-icons-twilio";
import { AirbnbLogo } from "@twilio-labs/match-logos-mono";
import { ChimeLogo } from "@twilio-labs/match-logos-color";
import { MatchActions } from "../../../reducers/match";
import { MatchContext } from "../../../context/match";
import type { CodeProps, PreviewProps } from "./types";
import {
  snippet,
  singleLine,
  liveSnippet,
  livePreview,
  themeSwitcher,
  previewContent,
} from "./code.module.css";

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
}) => {
  const {
    dispatch,
    state: { theme },
  } = React.useContext(MatchContext);

  const setTheme = (theme: string) => {
    if (!theme) return;
    dispatch({
      type: MatchActions.SetMatchTheme,
      payload: theme as ThemeVariants,
    });
  };

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
        }}
        language={lang}
        theme={prismTheme}
      >
        <StyledPreview className={livePreview} bg={bg}>
          <div className={themeSwitcher}>
            <button
              className={theme}
              onClick={() =>
                theme === "Twilio" ? setTheme("SendGrid") : setTheme("Twilio")
              }
            >
              SendGrid | Twilio
            </button>
          </div>
          <StyledBase className={previewContent}>
            <LivePreview />
          </StyledBase>
        </StyledPreview>
        <div className={clsx(snippet, liveSnippet)}>
          <LiveEditor style={{ background: "transparent" }} />
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
