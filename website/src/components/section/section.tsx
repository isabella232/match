import * as React from "react";
import clsx from "clsx";
import type { SectionProps } from "./types";
import { section, content, colSpan10, colSpan8 } from "./section.module.css";

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  contentClassName,
  columns = 12,
  ...props
}) => (
  <div className={clsx(section, className)} {...props}>
    <div
      className={clsx(content, contentClassName, {
        [colSpan10]: columns === 10,
        [colSpan8]: columns === 8,
      })}
    >
      {children}
    </div>
  </div>
);
