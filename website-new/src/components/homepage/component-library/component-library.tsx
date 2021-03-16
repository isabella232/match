import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Section } from "../../section";
import { Grid } from "../../grid";
import { ArrowLink } from "../../arrow-link";
import { SectionHeader } from "../section-header";
import {
  section,
  content,
  header,
  gatsbyImg,
  components,
  sectionLink,
} from "./component-library.module.css";

export const ComponentLibrary: React.FC = () => (
  <Section className={section} contentClassName={content} columns={10}>
    <SectionHeader
      className={header}
      tagline="Component Library"
      title="Everything you need to create the best experiences"
    />
    <Grid className={components}>
      <Link to="/">
        <StaticImage
          src="./images/anchor.png"
          alt=""
          layout="constrained"
          className={gatsbyImg}
          imgStyle={{ objectFit: "contain" }}
        />
        <span>Anchor</span>
      </Link>
      <Link to="/">
        <StaticImage
          src="./images/button.png"
          alt=""
          layout="constrained"
          className={gatsbyImg}
          imgStyle={{ objectFit: "contain" }}
        />
        <span>Button</span>
      </Link>
      <Link to="/">
        <StaticImage
          src="./images/card.png"
          alt=""
          layout="constrained"
          className={gatsbyImg}
          imgStyle={{ objectFit: "contain" }}
        />
        <span>Card</span>
      </Link>
      <Link to="/">
        <StaticImage
          src="./images/code.png"
          alt=""
          layout="constrained"
          className={gatsbyImg}
          imgStyle={{ objectFit: "contain" }}
        />
        <span>Code</span>
      </Link>
      <Link to="/">
        <StaticImage
          src="./images/grid.png"
          alt=""
          layout="constrained"
          className={gatsbyImg}
          imgStyle={{ objectFit: "contain" }}
        />
        <span>Grid</span>
      </Link>
      <Link to="/">
        <StaticImage
          src="./images/icon.png"
          alt=""
          layout="constrained"
          className={gatsbyImg}
          imgStyle={{ objectFit: "contain" }}
        />
        <span>Icon</span>
      </Link>
      <Link to="/">
        <StaticImage
          src="./images/separator.png"
          alt=""
          layout="constrained"
          className={gatsbyImg}
          imgStyle={{ objectFit: "contain" }}
        />
        <span>Separator</span>
      </Link>
      <Link to="/">
        <StaticImage
          src="./images/visually-hidden.png"
          alt=""
          layout="constrained"
          className={gatsbyImg}
          imgStyle={{ objectFit: "contain" }}
        />
        <span>VisuallyHidden</span>
      </Link>
    </Grid>
    <div className={sectionLink}>
      <span>Looking for our full library of components?</span>{" "}
      <span>
        <ArrowLink to="/">Visit our documentation site</ArrowLink>
      </span>
    </div>
  </Section>
);
