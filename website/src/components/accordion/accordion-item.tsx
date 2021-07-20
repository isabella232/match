import clsx from "clsx";
import * as React from "react";

import { accordionItem } from "./accordion.module.css";
import { AccordionItemProps } from "./types";

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  className,
  ...props
}) => (
  <li className={clsx(accordionItem, className)} {...props}>
    {children}
  </li>
);
