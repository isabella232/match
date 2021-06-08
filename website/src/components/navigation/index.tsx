import clsx from "clsx";
import { useStaticQuery, graphql, Link } from "gatsby";
import * as React from "react";

import iconComponents from "../../images/icons/components.svg";
import iconDesignTokens from "../../images/icons/design-tokens.svg";
import iconGettingStarted from "../../images/icons/getting-started.svg";
import iconGithub from "../../images/icons/github.svg";
import iconRoadmap from "../../images/icons/roadmap.svg";
import iconUtilities from "../../images/icons/utility.svg";
import { Accordion, AccordionGroup, AccordionItem } from "../accordion";
import {
  siteNavigation,
  siteNavContent,
  open,
  link,
  icon,
  siteNavFooter,
} from "./navigation.module.css";

const sections = {
  ["Getting Started"]: iconGettingStarted,
  ["Design Tokens"]: iconDesignTokens,
  ["Components"]: iconComponents,
  ["Utilities"]: iconUtilities,
};

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  isOpen?: boolean;
}

const NavQuery = graphql`
  query SideNavQuery {
    allMdx(
      sort: { order: ASC, fields: frontmatter___order }
      filter: { fields: { sidebarLabel: { ne: "" } } }
    ) {
      edges {
        node {
          id
          fields {
            sidebarLabel
            section
            slug
          }
        }
      }
    }
  }
`;

type NavQueryResult = {
  allMdx: {
    edges: {
      node: {
        id: string;
        fields: {
          sidebarLabel: string;
          section: string;
          slug: string;
        };
      };
    }[];
  };
};

export const Navigation: React.FC<NavigationProps> = ({
  className,
  isOpen,
  ...props
}) => {
  const {
    allMdx: { edges: pages },
  } = useStaticQuery<NavQueryResult>(NavQuery);
  return (
    <aside
      className={clsx(siteNavigation, className, isOpen && open)}
      {...props}
    >
      <div className={siteNavContent}>
        <Accordion allowMultiple={true} allowToggle={true}>
          {Object.entries(sections).map(([heading, icon]) => (
            <AccordionGroup key={heading} heading={heading} icon={icon}>
              {pages
                .filter(
                  ({
                    node: {
                      fields: { section },
                    },
                  }) => section === heading
                )
                .map(({ node: { fields } }) => (
                  <AccordionItem key={heading + fields.sidebarLabel}>
                    <Link to={fields.slug}>{fields.sidebarLabel}</Link>
                  </AccordionItem>
                ))}
            </AccordionGroup>
          ))}
        </Accordion>
      </div>

      <div className={siteNavFooter}>
        <a className={clsx(link)} href="https://github.com/twilio-labs/match">
          <img
            draggable="false"
            className={clsx(icon)}
            src={iconGithub}
            alt=""
          />
          Github
        </a>
        <a className={clsx(link)} href="/roadmap">
          <img
            draggable="false"
            className={clsx(icon)}
            src={iconRoadmap}
            alt=""
          />
          Roadmap
        </a>
      </div>
    </aside>
  );
};
