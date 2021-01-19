import * as React from "react";
import { usePopoverState, Popover, PopoverDisclosure } from "reakit/Popover";
import { Tooltip } from "../tooltip/tooltip";
import styles from "./token-table.module.css";
import MoreIcon from "./more.svg";

export type CopyMenuProps = {
  name: string;
  value:
    | string
    | number
    | {
        [unit: string]: string;
      };
};

const CopyMenu: React.FC<CopyMenuProps> = ({ name, value }) => {
  const [isTooltipVisible, setIsTooltipVisible] = React.useState<boolean>(
    false
  );
  const popover = usePopoverState({
    gutter: 0,
    modal: true,
    placement: "right-start",
  });

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
    popover.hide();
    setIsTooltipVisible(true);
    setTimeout(() => {
      setIsTooltipVisible(false);
    }, 2000);
  };

  const handleKeyboard = (value: string) => (
    e: React.KeyboardEvent<HTMLLIElement>
  ) => {
    if (e.key === "Enter") {
      handleCopy(value);
    }
  };

  return (
    <div className={styles.copyWrapper}>
      <Tooltip
        visible={isTooltipVisible}
        anchorRef={popover.unstable_referenceRef}
        offset={8}
      >
        Copied!
      </Tooltip>
      <PopoverDisclosure {...popover} className={styles.moreButton}>
        <MoreIcon />
      </PopoverDisclosure>
      <Popover
        {...popover}
        hideOnClickOutside={true}
        hideOnEsc={true}
        aria-label="Choose what to copy"
      >
        <ul role="menu" className={styles.copyMenu}>
          <li
            role="menuitem"
            onClick={() => {
              handleCopy(name);
            }}
            onKeyDown={handleKeyboard(name)}
            tabIndex={0}
          >
            Copy token name
          </li>
          {["string", "number"].includes(typeof value) ? (
            <li
              role="menuitem"
              onClick={() => {
                handleCopy(value as string);
              }}
              onKeyDown={handleKeyboard(value as string)}
              tabIndex={0}
            >
              Copy token value
            </li>
          ) : (
            Object.entries(value).map(([unit, value]) => (
              <li
                key={`${name}.value.${unit}`}
                role="menuitem"
                onClick={() => {
                  handleCopy(value);
                }}
                onKeyDown={handleKeyboard(value)}
                tabIndex={0}
              >
                Copy token value ({unit})
              </li>
            ))
          )}
        </ul>
      </Popover>
    </div>
  );
};

export { CopyMenu };
