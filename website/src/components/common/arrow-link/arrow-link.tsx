import clsx from "clsx";
import { Link } from "gatsby";
import * as React from "react";
import { arrowLink } from "./arrow-link.module.css";
import arrow from "./arrow.svg";
import type { ArrowLinkProps } from "./types";

export const ArrowLink: React.FC<ArrowLinkProps> = ({
  to,
  className,
  children,
  ...props
}) =>
  Boolean(to) ? (
    <Link className={clsx(arrowLink, className)} to={to as string} {...props}>
      <span>{children}</span>
      <img src={arrow} alt="" />
    </Link>
  ) : (
    <a className={clsx(arrowLink, className)} {...props}>
      <span>{children}</span>
      <img src={arrow} alt="" />
    </a>
  );
