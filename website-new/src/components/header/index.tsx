import * as React from "react";
import clsx from "clsx";
import { siteHeader } from "./header.module.css";

export const Header: React.FC<React.HTMLAttributes<HTMLElement>> = ({className}) => (
  <header className={clsx(siteHeader, className)}>
    <p>Header</p>
  </header>
);
