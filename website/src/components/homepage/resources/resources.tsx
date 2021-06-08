import { Link } from "gatsby";
import * as React from "react";
import { Grid } from "../../grid";
import { Section } from "../../section";
import { SectionHeader } from "../section-header";
import lightbulbImg from "./images/lightbulb.svg";
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
      tagline="Resources and more - Coming soon!"
      title="Check out more from Match"
      align="left"
    />
    <Grid className={resources}>
      <div>
        <h3>
          <span>01</span>
          <Link to="/articles/accessibility">Accessibility 101</Link>
        </h3>
        <p>
          Inclusion is most important for us. Read about how Match puts
          accessibility first when building components and patterns.
        </p>
      </div>
      <div>
        <h3>
          <span>02</span>
          UX Research{" "}
          <sup>
            <sup>(coming soon)</sup>
          </sup>
        </h3>
        <p>Check out some of the user studies and surveys we have conducted!</p>
      </div>
      <div>
        <h3>
          <span>03</span>
          The Match Way{" "}
          <sup>
            <sup>(coming soon)</sup>
          </sup>
        </h3>
        <p>
          When working with multiple teams, process and structure is crucial for
          product success.
        </p>
      </div>
      <div>
        <h3>
          <span>04</span>
          Fun Stuff{" "}
          <sup>
            <sup>(coming soon)</sup>
          </sup>
        </h3>
        <p>
          The Match team loves a good super fun time! Here are some random
          things to check out.
        </p>
      </div>
    </Grid>
    <div className={illustration}>
      <img src={lightbulbImg} alt="" />
    </div>
  </Section>
);
