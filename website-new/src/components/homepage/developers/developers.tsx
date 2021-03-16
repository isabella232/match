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
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
        De carne lumbering animata corpora quaeritis.
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
