import * as React from "react";
import clsx from "clsx";
import { ThemeVariants } from "@twilio-labs/match-themes";
import { MatchActions } from "../../../reducers/match";
import { MatchContext } from "../../../context/match";
import { PageHeaderProps } from "./types";

import twilioIcon from "../../../images/icons/twilio-logo.svg";
import sendgridIcon from "../../../images/icons/sendgrid-logo.svg";

import {
  header,
  content,
  breadcrumbStyle,
  descriptionStyle,
  current,
  themeSwitcher,
  active
} from "./header.module.css";
export const Header: React.FC<PageHeaderProps> = ({
  label,
  description,
  breadcrumbs,
  className
}) => {
  const {
    dispatch,
    state: { theme }
  } = React.useContext(MatchContext);

  const setTheme = (theme: string) => {
    if (!theme) return;
    dispatch({
      type: MatchActions.SetMatchTheme,
      payload: theme as ThemeVariants
    });
  };

  return (
    <div className={clsx(header, className)}>
      <div className={content}>
        <div className={breadcrumbStyle}>
          {breadcrumbs && breadcrumbs.map(crumb => crumb)}
          <span className={current}>{label || "Match"}</span>
        </div>
        <h1>{label || "Match"}</h1>
        {description && <div className={descriptionStyle}>{description}</div>}
      </div>
      <div className={themeSwitcher}>
        <span>Switch theme</span>
        <button
          className={theme === "Twilio" ? active : undefined}
          onClick={() => setTheme("Twilio")}
        >
          <img src={twilioIcon} alt="" /> Twilio
        </button>
        <button
          className={theme === "SendGrid" ? active : undefined}
          onClick={() => setTheme("SendGrid")}
        >
          <img src={sendgridIcon} alt="" /> Sendgrid
        </button>
      </div>
    </div>
  );
};
