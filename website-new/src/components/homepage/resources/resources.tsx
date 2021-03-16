import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Section } from "../../section";
import { Grid } from "../../grid";
import { SectionHeader } from "../section-header";
import {
  section,
  content,
  header,
  resources,
  illustration,
} from "./resources.module.css";

export const Resources: React.FC = () => (
  <Section className={section} contentClassName={content} columns={10}>
    <SectionHeader
      className={header}
      tagline="Resources and more"
      title="Check out more from Match"
      align="left"
    />
    <Grid className={resources}>
      <div>
        <h3>
          <span>01</span>
          <Link to="/">Accessibility 101</Link>
        </h3>
        <p>
          Inclusion is most important for us. Read about how Match puts
          accessibility first when building components and patterns.
        </p>
      </div>
      <div>
        <h3>
          <span>02</span>
          <Link to="/">UX Research</Link>
        </h3>
        <p>Check out some of the user studies and surveys we have conducted!</p>
      </div>
      <div>
        <h3>
          <span>03</span>
          <Link to="/">The Match Way</Link>
        </h3>
        <p>
          When working with multiple teams, process and structure is crucial for
          product success.
        </p>
      </div>
      <div>
        <h3>
          <span>04</span>
          <Link to="/">Fun Stuff</Link>
        </h3>
        <p>
          The Match team loves a good super fun time! Here are some random
          things to check out.
        </p>
      </div>
    </Grid>
    <div className={illustration}>
      <StaticImage src="./images/illustration.png" />
    </div>
  </Section>
);
