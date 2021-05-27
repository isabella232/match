import * as React from "react";
import { Link } from "gatsby";
import { Section } from "../../section";
import { Grid } from "../../grid";
import { ArrowLink } from "../../common/arrow-link";
import { SectionHeader } from "../section-header";
import {
  section,
  content,
  header,
  gatsbyImg,
  components,
  sectionLink,
} from "./component-library.module.css";
import anchorImg from "./images/anchor.svg";
import buttonImg from "./images/button.svg";
import cardImg from "./images/card.svg";
import codeImg from "./images/code.svg";
import gridImg from "./images/grid.svg";
import iconImg from "./images/icon.svg";
import separatorImg from "./images/separator.svg";
import visuallyHiddenImg from "./images/visually-hidden.svg";

export const ComponentLibrary: React.FC = () => (
  <Section className={section} contentClassName={content} columns={10}>
    <SectionHeader
      className={header}
      tagline="Component Library"
      title="Everything you need to create the best experiences"
    />
    <Grid className={components}>
      <Link to="/components/anchor">
        <img src={anchorImg} alt="" className={gatsbyImg} />
        <span>Anchor</span>
      </Link>
      <Link to="/components/button">
        <img src={buttonImg} alt="" className={gatsbyImg} />
        <span>Button</span>
      </Link>
      <Link to="/components/card">
        <img src={cardImg} alt="" className={gatsbyImg} />
        <span>Card</span>
      </Link>
      <Link to="/components/code">
        <img src={codeImg} alt="" className={gatsbyImg} />
        <span>Code</span>
      </Link>
      <Link to="/components/grid">
        <img src={gridImg} alt="" className={gatsbyImg} />
        <span>Grid</span>
      </Link>
      <Link to="/components/icon">
        <img src={iconImg} alt="" className={gatsbyImg} />
        <span>Icon</span>
      </Link>
      <Link to="/components/separator">
        <img src={separatorImg} alt="" className={gatsbyImg} />
        <span>Separator</span>
      </Link>
      <Link to="/utilities/visually-hidden">
        <img src={visuallyHiddenImg} alt="" className={gatsbyImg} />
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
