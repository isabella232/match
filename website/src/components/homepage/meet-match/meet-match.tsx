import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { ArrowLink } from "../../common/arrow-link";
import { Grid } from "../../grid";
import { Section } from "../../section";
import { SectionHeader } from "../section-header";
import { Separator } from "../separator";
import {
  meetMatch,
  intro,
  getStarted,
  pasteLink,
  gatsbyImg,
} from "./meet-match.module.css";

export const MeetMatch: React.FC = () => (
  <Section className={meetMatch} columns={8}>
    <div className={intro}>
      <h1>Meet Match, Twilio’s Brand Design System</h1>
      <p>
        Match provides components and patterns to help teams work more
        efficiently, and to make Twilio’s public facing properties more
        cohesive.
      </p>
    </div>
    <Separator />
    <SectionHeader tagline="Get Started" title="Start using Match today" />
    <Grid className={getStarted}>
      <figure>
        <Link to="/" tabIndex={-1}>
          <StaticImage
            className={gatsbyImg}
            src="images/design.png"
            alt=""
            loading="eager"
            layout="fullWidth"
          />
        </Link>
        <figcaption>
          <Link to="">Design</Link>
        </figcaption>
      </figure>
      <figure>
        <Link to="/" tabIndex={-1}>
          <StaticImage
            className={gatsbyImg}
            src="images/develop.png"
            alt=""
            loading="eager"
            layout="fullWidth"
          />
        </Link>
        <figcaption>
          <Link to="/">Develop</Link>
        </figcaption>
      </figure>
      <figure>
        <Link to="/" tabIndex={-1}>
          <StaticImage
            className={gatsbyImg}
            src="images/write.png"
            alt=""
            loading="eager"
            layout="fullWidth"
          />
        </Link>
        <figcaption>
          <Link to="/">Write</Link>
        </figcaption>
      </figure>
    </Grid>
    <div className={pasteLink}>
      <span>
        <StaticImage
          className={gatsbyImg}
          src="images/paste-logo.png"
          alt="Twilio Paste logo"
          loading="eager"
          layout="fixed"
        />
        Looking to create in-app experiences?
      </span>{" "}
      <span>
        <ArrowLink href="https://paste.twilio.design">Go to Paste</ArrowLink>
      </span>
    </div>
  </Section>
);
