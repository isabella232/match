import * as React from "react";
import clsx from "clsx";
import { Accordion, AccordionGroup, AccordionItem } from "../accordion";
import {
  siteNavigation,
  siteNavContent,
  open,
  link,
  icon,
  siteNavFooter,
} from "./navigation.module.css";

import iconGettingStarted from "../../images/icons/getting-started.svg";
import iconDesignTokens from "../../images/icons/design-tokens.svg";
import iconComponents from "../../images/icons/components.svg";
import iconUtilities from "../../images/icons/utility.svg";
import iconHelp from "../../images/icons/help.svg";
import iconGithub from "../../images/icons/github.svg";
import iconRoadmap from "../../images/icons/roadmap.svg";
interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  isOpen?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  className,
  isOpen,
  ...props
}) => {
  return (
    <aside
      className={clsx(siteNavigation, className, isOpen && open)}
      {...props}
    >
      <div className={siteNavContent}>
        <Accordion allowMultiple={false} allowToggle={true}>
          <AccordionGroup
            heading={"Getting Started"}
            icon={iconGettingStarted}
            allowToggle={true}
          >
            <AccordionItem>
              <a href="/">Anchor</a>
            </AccordionItem>
          </AccordionGroup>
          <AccordionGroup heading={"Design Tokens"} icon={iconDesignTokens}>
            <AccordionItem>
              <a href="/">Anchor</a>
            </AccordionItem>
            <AccordionItem>
              <a href="/">Button</a>
            </AccordionItem>
            <AccordionItem>
              <a href="/">Card</a>
            </AccordionItem>
            <AccordionItem>
              <a href="/">Code Snippet</a>
            </AccordionItem>
            <AccordionItem>
              <a href="/">Button</a>
            </AccordionItem>
          </AccordionGroup>
          <AccordionGroup heading={"Components"} icon={iconComponents}>
            <AccordionItem>
              <a href="/">Anchor</a>
            </AccordionItem>
            <AccordionItem>
              <a href="/">Button</a>
            </AccordionItem>
            <AccordionItem>
              <a href="/">Card</a>
            </AccordionItem>
            <AccordionItem>
              <a href="/">Code Snippet</a>
            </AccordionItem>
            <AccordionItem>
              <a href="/">Button</a>
            </AccordionItem>
          </AccordionGroup>
          <AccordionGroup heading={"Utilities"} icon={iconUtilities} />
          <AccordionGroup heading={"Help"} icon={iconHelp} />
        </Accordion>
      </div>

      <div className={siteNavFooter}>
        <a className={clsx(link)} href="https://github.com/twilio-labs/match">
          <img
            draggable="false"
            className={clsx(icon)}
            src={iconGithub}
            alt=""
          />
          Github
        </a>
        <a className={clsx(link)} href="/roadmap">
          <img
            draggable="false"
            className={clsx(icon)}
            src={iconRoadmap}
            alt=""
          />
          Roadmap
        </a>
      </div>
    </aside>
  );
};
