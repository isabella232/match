import clsx from "clsx";
import * as React from "react";
import { Section } from "../section";
import {
  section,
  footer,
  logo,
  navigation,
  support,
} from "./footer.module.css";
import logoSvg from "./images/logo.svg";

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => (
  <Section className={clsx(section, className)} columns={10}>
    <footer className={footer}>
      <div>
        <div className={logo}>
          <img src={logoSvg} alt="Twilio logo" />
        </div>
        <nav className={navigation}>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.twilio.com/brand"
              >
                Twilio Brand
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/twilio-labs/match"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={support}>
        <p>
          <strong>Need support? Have a question?</strong>
          <br />
          Reach us via{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/twilio-labs/match/discussions"
          >
            Github
          </a>{" "}
          or
          <br />
          slack us{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://twilio.slack.com/archives/C019140RARF"
          >
            #help-match-dsys
          </a>
        </p>
        <p>Copyright &copy; {new Date().getFullYear()} Twilio</p>
      </div>
    </footer>
  </Section>
);
