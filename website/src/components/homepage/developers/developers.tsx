import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Section } from "../../section";
import { SectionHeader } from "../section-header";
import {
  section,
  content,
  header,
  copy,
  swoop,
  gatsbyImg,
} from "./developers.module.css";
import swoopSvg from "./images/swoop.svg";

export const Developers: React.FC = () => (
  <Section className={section} contentClassName={content} columns={10}>
    <div>
      <SectionHeader
        align="left"
        className={header}
        tagline="Home for all developers"
        title="Easy to implement, easier to customize"
      />
      <p className={copy}>
        Build quickly with reusable, accessible React components or create
        custom experiences using our design tokens.
      </p>
    </div>
    <div>
      <img className={swoop} src={swoopSvg} alt="" />
      <StaticImage
        className={gatsbyImg}
        src="./images/code-sample.png"
        alt="code sample demonstrating Match"
        layout="fullWidth"
      />
    </div>
  </Section>
);
