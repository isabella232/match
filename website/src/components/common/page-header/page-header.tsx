import * as React from "react";
import clsx from "clsx";
import { uid } from "react-uid";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import arrowDiagonalIcon from "../../../images/icons/arrow-diagonal.svg";
import { Section } from "../../section";
import { ThemeSwitcher } from "../../theme-switcher";
import type { PageHeaderProps, Crumb } from "./types";
import {
  header,
  content,
  breadcrumbs,
  resourceLinks,
  resourceLogo,
  resourceFigma,
  resourceArrow,
  imageAndText,
  textOnly,
  image,
  themeSwitcher,
  themeSwitcherWrap,
} from "./header.module.css";

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  className,
  pathname,
  figmaLink,
  githubLink,
  gatsbyImage,
}) => {
  const crumbs: Crumb[] = React.useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    return [
      { path: "/", label: "Match" },
      ...parts.map((part, i) => ({
        path: "/" + parts.slice(0, i + 1).join("/") + "/",
        label: part
          .split("-")
          .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
          .join(" "),
      })),
    ];
  }, [pathname]);

  const hasThemeSwitcher = [
    "/design-tokens/tokens/",
    "/foundation/icons-list/",
  ].includes(pathname.endsWith("/") ? pathname : `${pathname}/`);

  return (
    <>
      <Section
        columns={10}
        className={clsx(header, className)}
        contentClassName={clsx(content, {
          [imageAndText]: Boolean(gatsbyImage),
          [textOnly]: !Boolean(gatsbyImage),
        })}
      >
        <div>
          <div className={breadcrumbs}>
            {crumbs.map((crumb, i) => (
              <React.Fragment key={uid(crumb)}>
                <Link to={crumb.path}>{crumb.label}</Link>
                {i + 1 < crumbs.length && <span aria-hidden={true}>/</span>}
              </React.Fragment>
            ))}
          </div>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {(figmaLink || githubLink) && (
            <div className={resourceLinks}>
              {figmaLink && (
                <a
                  className={resourceFigma}
                  href={figmaLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StaticImage
                    className={resourceLogo}
                    src="../../../images/logos/figma.png"
                    alt=""
                    layout="fixed"
                    aria-hidden="true"
                  />
                  Figma
                  <img
                    className={resourceArrow}
                    src={arrowDiagonalIcon}
                    alt="external link"
                  />
                </a>
              )}
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noreferrer">
                  <StaticImage
                    className={resourceLogo}
                    src="../../../images/logos/github-light.png"
                    alt=""
                    layout="fixed"
                    aria-hidden="true"
                  />
                  Github
                  <img
                    className={resourceArrow}
                    src={arrowDiagonalIcon}
                    alt="external link"
                  />
                </a>
              )}
            </div>
          )}
        </div>
        {gatsbyImage && (
          <div className={image}>
            <GatsbyImage image={gatsbyImage} alt="" aria-hidden="true" />
          </div>
        )}
      </Section>
      {hasThemeSwitcher && (
        <Section
          columns={10}
          className={themeSwitcherWrap}
          contentClassName={themeSwitcher}
        >
          <div>Switch Theme</div>
          <ThemeSwitcher variant="header" />
        </Section>
      )}
    </>
  );
};
