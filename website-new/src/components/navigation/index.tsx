import * as React from "react";
import clsx from "clsx";
import { siteNavigation } from "./navigation.module.css";

export const Navigation: React.FC<React.HTMLAttributes<HTMLElement>> = ({className}) => (
  <aside className={clsx(siteNavigation, className)}>
    <p>Navigation</p>
  </aside>
);
