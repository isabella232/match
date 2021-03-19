import * as React from "react";
import clsx from "clsx";
import {
  icon,
  link,
  mainLink,
  sideLinks,
  innerWrapper,
  siteHeader,
  sideLink,
} from "./header.module.css";
import logo from "../../images/logo.svg";
import iconGithub from "../../images/icons/github.svg";
import iconRoadmap from "../../images/icons/roadmap.svg";

export const Header: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
}) => (
  <header className={clsx(siteHeader, className)}>
    <div>
      <div className={innerWrapper}>
        <a className={clsx(link, mainLink)} href="/">
          <img draggable="false" src={logo} alt="Match Design System" />
        </a>
        <div className={sideLinks}>
          <a
            className={clsx(link, sideLink)}
            href="https://github.com/twilio-labs/match"
          >
            <img draggable="false" className={icon} src={iconGithub} alt="" />
            Github
          </a>
          <a className={clsx(link, sideLink)} href="/roadmap">
            <img draggable="false" className={icon} src={iconRoadmap} alt="" />
            Roadmap
          </a>
        </div>
      </div>
    </div>
  </header>
);
