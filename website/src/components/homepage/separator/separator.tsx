import clsx from "clsx";
import * as React from "react";
import { Separator as ReakitSeparator } from "reakit";
import { separator } from "./separator.module.css";

export const Separator: React.FC<React.HTMLAttributes<HTMLHRElement>> = ({
  className,
}) => <ReakitSeparator className={clsx(separator, className)} />;
