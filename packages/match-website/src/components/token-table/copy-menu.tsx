import * as React from "react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./token-table.module.css";

export type CopyMenuProps = {
  name: string;
  value:
    | string
    | {
        [unit: string]: string;
      };
};

const CopyMenu: React.FC<CopyMenuProps> = ({ name, value }) => {
  const [isCopyMenuOpen, setIsCopyMenuOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setIsCopyMenuOpen(false);
  };
  useEffect(() => {
    const closeOnFocusLost = (e: MouseEvent | FocusEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (e.target instanceof Element && !ref.current?.contains(e.target!)) {
        setIsCopyMenuOpen(false);
      }
    };
    if (isCopyMenuOpen) {
      document.body.addEventListener("click", closeOnFocusLost);
      document.body.addEventListener("focusin", closeOnFocusLost);
    }

    return () => {
      document.body.removeEventListener("click", closeOnFocusLost);
      document.body.removeEventListener("focusin", closeOnFocusLost);
    };
  }, [isCopyMenuOpen]);

  const handleKeyboard = (value: string) => (
    e: React.KeyboardEvent<HTMLLIElement>
  ) => {
    if (e.key === "Enter") {
      handleCopy(value);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      ref={ref}
      className={styles.copyWrapper}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setIsCopyMenuOpen(false);
        }
      }}
    >
      <button
        onClick={() => {
          setIsCopyMenuOpen(!isCopyMenuOpen);
        }}
        aria-expanded={isCopyMenuOpen}
      >
        ...
      </button>

      <ul
        role="menu"
        className={clsx(styles.copyMenu, {
          [styles.isOpen]: isCopyMenuOpen,
        })}
      >
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
    </div>
  );
};

export { CopyMenu };
