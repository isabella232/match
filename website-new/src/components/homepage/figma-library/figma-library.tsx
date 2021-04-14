import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Section } from "../../section";
import { ArrowLink } from "../../common/arrow-link";
import { Separator } from "../separator";
import { SectionHeader } from "../section-header";
import {
  section,
  header,
  separator,
  gatsbyImg,
  sectionLink,
} from "./figma-library.module.css";

export const FigmaLibrary: React.FC = () => (
  <Section className={section} columns={8}>
    <Separator className={separator} />
    <SectionHeader
      className={header}
      tagline="Set up with designers in mind"
      title="Components and layer styles ready for you to use"
    />

    <StaticImage src="./images/illustration.png" alt="" layout="constrained" />

    <div className={sectionLink}>
      <p>
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
        De carne lumbering animata corpora quaeritis. Check out the design
        libraries!
      </p>
      <p>
        <StaticImage
          className={gatsbyImg}
          src="./images/figma-logo.png"
          alt="Figma logo"
          layout="fixed"
        />
        <ArrowLink to="/">Check out our Figma library</ArrowLink>
      </p>
    </div>
  </Section>
);
