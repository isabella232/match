import * as React from "react";
import styles from "./virtue-crime-cards.module.css";
import { CheckIcon } from "@twilio-labs/match-icons-twilio";

const Virtue: React.FC = ({ children }) => {
  return (
    <div className={styles.virtue}>
      <div className={styles.heading}>
        <CheckIcon />
        Do
      </div>
      {children}
    </div>
  );
};

export { Virtue };
