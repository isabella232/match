import React from "react";
import styles from "./icons.module.css";

export type IconsProps = {
  icons: {
    [iconName: string]: React.ComponentType;
  };
};

const softHyphen = "­"; // there is a soft hyphen (U+00AD, aka &shy;) in here

export const Icons: React.FC<IconsProps> = ({ icons }) => {
  return (
    <div className={styles.Icons}>
      {Object.entries(icons).map(([name, Icon]) => {
        return (
          <div className={styles.iconCell} key={name}>
            <div className={styles.title}>
              {name
                .replace(/icon$/i, "")
                .replace(/([A-Z])([a-z]+)/g, `$1$2${softHyphen}`)}
            </div>
            <div className={styles.icon}>
              <Icon />
            </div>
          </div>
        );
      })}
    </div>
  );
};
