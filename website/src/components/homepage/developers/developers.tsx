import * as React from "react";

import { Code } from "../../markdown/code";
import { Section } from "../../section";
import { SectionHeader } from "../section-header";

import {
  section,
  content,
  header,
  codeContainer,
  copy,
  swoop,
  snippet,
} from "./developers.module.css";
import swoopSvg from "./images/swoop.svg";

const code = `
<Paragraph>
  See something that looks interesting? Try running{" "}
  <Code variant="light">twilio api</Code>.
</Paragraph>
`;

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
    <div className={codeContainer}>
      <img className={swoop} src={swoopSvg} alt="" />
      <div className={snippet}>
        <Code lang="jsx" live={true}>
          {code}
        </Code>
      </div>
    </div>
  </Section>
);
