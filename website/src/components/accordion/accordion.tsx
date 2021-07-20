import clsx from "clsx";
import * as React from "react";

import { accordion } from "./accordion.module.css";
import { AccordionProps } from "./types";

export const Accordion: React.FC<AccordionProps> = ({
  allowToggle,
  allowMultiple,
  children,
  className,
  ...props
}) => {
  // allowMultiple requires allowToggle
  if (allowMultiple) {
    allowToggle = true;
  }

  const [expanded, setExpanded] = React.useState<Array<string>>([]);

  const handleItemClick = (key: string) => {
    let newExpanded = [...expanded];
    const index = newExpanded.indexOf(key);
    // if we don't allow multiple, close all other groups
    if (!allowMultiple) {
      // only one may be expanded
      newExpanded = [key];
    } else if (index === -1) {
      newExpanded.push(key);
    } else if (allowToggle) {
      // allowToggle === allow us to close the group
      newExpanded.splice(index, 1);
    }

    setExpanded(newExpanded);
  };

  return (
    <ul className={clsx(accordion, className)} {...props}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const key = `accordionGroup${index}`;
          return React.cloneElement(child, {
            allowToggle,
            expanded: expanded.includes(key),
            handleClick: handleItemClick,
            id: key,
          });
        }
      })}
    </ul>
  );
};
