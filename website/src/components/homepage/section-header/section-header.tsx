import clsx from "clsx";
import * as React from "react";

import {
  sectionHeader,
  centerAlign,
  leftAlign,
} from "./section-header.module.css";
import type { SectionHeaderProps } from "./types";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  title,
  tagline,
  align = "center",
}) => (
  <div
    className={clsx(sectionHeader, className, {
      [centerAlign]: align === "center",
      [leftAlign]: align === "left",
    })}
  >
    {Boolean(tagline) && <p>{tagline}</p>}
    <h2>{title}</h2>
  </div>
);
