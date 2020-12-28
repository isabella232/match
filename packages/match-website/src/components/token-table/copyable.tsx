/* eslint-disable @typescript-eslint/no-non-null-assertion, jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import * as React from "react";
import { useState } from "react";
import {
  Tooltip,
  TooltipArrow,
  TooltipReference,
  useTooltipState,
} from "reakit/Tooltip";
import styles from "./copyable.module.css";

const Copyable: React.FC = ({ children }) => {
  const tooltip = useTooltipState({ visible: false });
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    navigator.clipboard.writeText(e.currentTarget.textContent!);
    tooltip.show();
    setIsTooltipVisible(true);
    setTimeout(() => {
      tooltip.hide();
      setIsTooltipVisible(false);
    }, 1000);
  };

  return (
    <div className={styles.copyable} onClick={handleCopy}>
      <TooltipReference {...tooltip}>{children}</TooltipReference>
      <Tooltip
        {...tooltip}
        visible={isTooltipVisible}
        className={styles.tooltip}
      >
        <TooltipArrow {...tooltip} />
        Copied!
      </Tooltip>
    </div>
  );
};

export { Copyable };
/* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, @typescript-eslint/no-non-null-assertion */
