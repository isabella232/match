import * as React from "react";
import clsx from "clsx";
import { siteFooter } from "./footer.module.css";

export const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = ({className}) => (
  <footer className={clsx(siteFooter, className)}>
    <p>Footer</p>
  </footer>
);
