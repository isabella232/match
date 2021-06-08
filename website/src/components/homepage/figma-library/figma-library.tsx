import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { ArrowLink } from "../../common/arrow-link";
import { Section } from "../../section";
import { SectionHeader } from "../section-header";
import { Separator } from "../separator";
import {
  section,
  header,
  separator,
  gatsbyImg,
  illustrationStyle,
  sectionLink,
} from "./figma-library.module.css";
import illustrationImg from "./images/illustration.svg";

export const FigmaLibrary: React.FC = () => (
  <Section className={section} columns={8}>
    <Separator className={separator} />
    <SectionHeader
      className={header}
      tagline="Set up with designers in mind"
      title="Components and layer styles ready for you to use"
    />

    <img src={illustrationImg} className={illustrationStyle} alt="" />

    <div className={sectionLink}>
      <p>
        Design high-quality user experiences that scale with over 20 reusable
        components and patterns. Built with Figma’s variants and auto layout
        features for easy editing and customization.
      </p>
      <p>
        <StaticImage
          className={gatsbyImg}
          src="../../../images/logos/figma.png"
          alt="Figma logo"
          layout="fixed"
        />
        <ArrowLink to="/">Check out our Figma library</ArrowLink>
      </p>
    </div>
  </Section>
);
