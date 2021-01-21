import React, { useLayoutEffect, useState } from "react";
import clsx from "clsx";
import styles from "./tooltip.module.css";

export type TooltipProps = {
  anchorRef: React.RefObject<HTMLElement | null>;
  visible: boolean;
  offset?: number;
};

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { anchorRef, children, visible, offset } = props;
  const tooltipStyle: React.CSSProperties = offset
    ? {
        transform: `translateY(-${offset}px)`,
      }
    : {};
  const [anchorRect, setAnchorRect] = useState<DOMRect>();

  useLayoutEffect(() => {
    if (anchorRef.current && visible) {
      setAnchorRect(anchorRef.current.getBoundingClientRect());
    }
  }, [anchorRef, visible]);

  return (
    <div
      className={styles.anchor}
      style={{
        width: anchorRect?.width,
        height: anchorRect?.height,
      }}
    >
      <div
        className={clsx(styles.Tooltip, {
          [styles.visible]: visible && anchorRect !== undefined,
        })}
        style={tooltipStyle}
      >
        {children}
      </div>
    </div>
  );
};
