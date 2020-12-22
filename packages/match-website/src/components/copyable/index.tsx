/* eslint-disable @typescript-eslint/no-non-null-assertion, jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import * as React from "react";
import styles from "./styles.module.css";

const Copyable: React.FC = ({ children }) => {
  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    navigator.clipboard.writeText(e.currentTarget.textContent!);
  };

  return (
    <div className={styles.copyable} onClick={handleCopy}>
      {children}
    </div>
  );
};

export { Copyable };
/* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, @typescript-eslint/no-non-null-assertion */
