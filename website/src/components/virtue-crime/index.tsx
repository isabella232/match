import * as React from "react";
import { Virtue } from "./virtue";
import { Crime } from "./crime";
import styles from "./styles.module.css";

const VirtueCrime: React.FC = ({ children }) => {
  return <div className={styles.virtueCrime}>{children}</div>;
};

export { VirtueCrime, Virtue, Crime };
