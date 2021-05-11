import * as React from "react";
import clsx from "clsx";
import { AccordionItemProps } from "./types";
import { accordionItem } from "./accordion.module.css";

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  className,
  ...props
}) => (
  <li className={clsx(accordionItem, className)} {...props}>
    {children}
  </li>
);
