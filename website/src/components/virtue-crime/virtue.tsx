import * as React from "react";
import styles from "./virtue-crime-cards.module.css";
import { VirtueIcon } from "./virtue-icon";

const Virtue: React.FC = ({ children }) => {
  return (
    <div className={styles.virtue}>
      <div className={styles.heading}>
        <VirtueIcon />
        Do
      </div>
      {children}
    </div>
  );
};

export { Virtue };
