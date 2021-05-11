import { AccordionGroupProps } from "./types";
import * as React from "react";
import { useUID } from "react-uid";
import clsx from "clsx";
import {
  accordionGroup,
  decorator,
  marker,
  itemWrapper,
  itemExpanded,
} from "./accordion.module.css";
import iconChevron from "../../images/icons/chevron-up.svg";

export const AccordionGroup: React.FC<AccordionGroupProps> = ({
  allowToggle,
  handleClick,
  expanded,
  heading,
  icon,
  children,
  className,
  id,
  ...props
}) => {
  const uid = useUID();
  const isExpanded = expanded && expanded.length > 1;
  return (
    <li className={clsx(accordionGroup, className)} {...props}>
      <button
        onClick={() => handleClick && id && handleClick(id)}
        aria-controls={uid}
        aria-expanded={isExpanded}
        aria-disabled={!allowToggle && isExpanded}
      >
        <h3>
          {icon && <img className={decorator} src={icon} alt="" />}
          {heading}
        </h3>

        <img className={marker} src={iconChevron} alt="Dropdown toggle" />
      </button>
      <ul
        className={clsx(itemWrapper, expanded && itemExpanded)}
        aria-labelledby=""
        role="region"
        id={uid}
        aria-hidden="false"
      >
        {children}
      </ul>
    </li>
  );
};
