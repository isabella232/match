import * as React from "react";
import { useUID } from "react-uid";
import { tooltip } from "./tooltip.module.css";
import { TooltipProps } from "./types";

export const Tooltip: React.FC<TooltipProps> = ({ tip, ...props }) => {
  const uid = useUID();
  return (
    <span className={tooltip}>
      <span role="button" tabIndex={0} aria-describedby={uid} {...props} />
      <span id={uid} role="tooltip">
        {tip}
      </span>
    </span>
  );
};
