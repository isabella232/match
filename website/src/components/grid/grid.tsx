import clsx from "clsx";
import * as React from "react";
import { grid } from "./grid.module.css";

export const Grid: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={clsx(grid, className)} {...props} />;
