import React from "react";
import { ThemeSwitcher } from "../theme-switcher";
import { MatchContext } from "../../context/match";
import * as productIcons from "@twilio-labs/match-icons-product";
import * as sendgridIcons from "@twilio-labs/match-icons-sendgrid";
import * as twilioIcons from "@twilio-labs/match-icons-twilio";
import { iconMetadata } from "./icon-metadata";
import type { Icon } from "@twilio-labs/match-components";
import styles from "./icons.module.css";
import { ThemeVariants } from "@twilio-labs/match-themes";

const softHyphen = "­"; // there is a soft hyphen (U+00AD, aka &shy;) in here

export const Icons: React.FC = () => {
  const {
    state: { theme },
  } = React.useContext(MatchContext);
  let icons: {
    [iconName: string]: typeof Icon;
  };
  switch (theme) {
    case ThemeVariants.TWILIO:
    default:
      icons = Object.assign(twilioIcons, productIcons);
      break;
    case ThemeVariants.SENDGRID:
      icons = Object.assign(sendgridIcons, productIcons);
      break;
  }

  const categories: {
    [key: string]: {
      [iconName: string]: typeof Icon;
    };
  } = {
    Action: {},
    Content: {},
    Decorative: {},
    Product: {},
  };

  Object.entries(icons).forEach(([iconName, iconComponent]) => {
    const metadata = iconMetadata[iconName];
    if (metadata) {
      categories[metadata.category][iconName] = iconComponent;
    } else {
      console.error(`Metadata not found for icon "${iconName}"`);
    }
  }, {});

  return (
    <div>
      <ThemeSwitcher noDescription />
      <div>
        {Object.entries(categories).map(([categoryName, childIcons]) => {
          return (
            <div
              className={styles.iconListWrapper}
              key={`theme-${categoryName}`}
            >
              <h2>{categoryName}</h2>
              <div className={styles.iconList}>
                {Object.entries(childIcons).map(([name, Icon]) => {
                  return (
                    <div className={styles.iconCell} key={name}>
                      <div className={styles.title}>
                        {name
                          .replace(/icon$/i, "")
                          .replace(/([A-Z])([a-z]+)/g, `$1$2${softHyphen}`)}
                      </div>
                      <div className={styles.icon}>
                        <Icon
                          title={name}
                          size={
                            ["Product", "Decorative"].includes(categoryName)
                              ? "large"
                              : "base"
                          }
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
