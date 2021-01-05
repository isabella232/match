import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
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
  const [bbox, setBbox] = useState<DOMRect>();

  const updateAnchorPosition = useCallback(() => {
    if (anchorRef.current && visible) {
      const anchorBbox = anchorRef.current.getBoundingClientRect();
      setBbox(anchorBbox);
    }
  }, [anchorRef, visible]);

  useEffect(() => {
    window.addEventListener("resize", updateAnchorPosition);
    window.addEventListener("scroll", updateAnchorPosition);
    return () => {
      window.removeEventListener("resize", updateAnchorPosition);
      window.removeEventListener("scroll", updateAnchorPosition);
    };
  });

  useLayoutEffect(() => {
    setTimeout(updateAnchorPosition, 0);
  }, [updateAnchorPosition, anchorRef, children, visible]);

  return (
    <div
      className={styles.anchor}
      style={{
        width: bbox?.width,
        height: bbox?.height,
        left: bbox?.left,
        top: bbox?.top,
      }}
    >
      <div
        className={clsx(styles.Tooltip, {
          [styles.visible]: visible && bbox !== undefined,
        })}
        style={tooltipStyle}
      >
        {children}
      </div>
    </div>
  );
};
