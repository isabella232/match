import * as React from "react";
import { CrimeIcon } from "./crime-icon";
import styles from "./virtue-crime-cards.module.css";

const Crime: React.FC = ({ children }) => {
  return (
    <div className={styles.crime}>
      <div className={styles.heading}>
        <CrimeIcon />
        Don&apos;t
      </div>
      {children}
    </div>
  );
};

export { Crime };
