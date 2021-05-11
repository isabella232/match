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
  navMenuButton,
  navMenuButtonAnimated,
  active,
} from "./header.module.css";
import logo from "../../images/logo.svg";
import iconGithub from "../../images/icons/github.svg";
import iconRoadmap from "../../images/icons/roadmap.svg";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  isNavOpen?: boolean;
  handleMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  handleMenuClick,
  isNavOpen,
}) => (
  <header className={clsx(siteHeader, className, isNavOpen && active)}>
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
    <button
      className={clsx(navMenuButton, isNavOpen && active)}
      onClick={() => handleMenuClick()}
      aria-label={`${isNavOpen ? "Close" : "Open"} the navigation menu`}
    >
      {/* Animated close button */}
      <div className={clsx(navMenuButtonAnimated, isNavOpen && active)} />
    </button>
  </header>
);
