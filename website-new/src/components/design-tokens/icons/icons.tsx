import * as React from "react";
// import { useTheme } from "@twilio-labs/match-themes";
// import { MatchContext } from "../../../context/match";
import { TokenFilters } from "../filters/filters";
import * as productIcons from "@twilio-labs/match-icons-product";
import * as twilioIcons from "@twilio-labs/match-icons-twilio";
// import * as sendgridIcons from "@twilio-labs/match-icons-sendgrid";
import type { Icon } from "@twilio-labs/match-primitives";
import { iconMetadata } from "../../icons/icon-metadata";
import { Header } from "../../page-header";
import {
  grid,
  groupStyle,
  iconWrapper,
  iconStyle,
  inlineCode,
} from "./icons.module.css";

// type Tokens = { [category: string]: Token[] };
// const softHyphen = "­"; // there is a soft hyphen (U+00AD, aka &shy;) in here

export const Icons: React.FC = () => {
  const title = "Icon list";
  // const theme = useTheme();
  // const {
  //   state: { filterText },
  // } = React.useContext(MatchContext);

  // const collection = React.useMemo(() => {
  //   const list = [];
  //   for (const group in theme) {
  //     // Exclude single token values
  //     if (typeof theme[group] !== "object") continue;

  //     list.push(
  //       ...Object.entries(theme[group]).map(([name, value]) => ({
  //         group,
  //         name,
  //         value: value as string,
  //         tags: getTokenTags(group),
  //       }))
  //     );
  //   }
  //   return list;
  // }, [theme]);

  // Assign icons based on theme
  let icons: {
    [iconName: string]: typeof Icon;
  };

  icons = Object.assign(twilioIcons, productIcons);

  // switch (theme) {
  //   case ThemeVariants.TWILIO:
  //   default:
  //     icons = Object.assign(twilioIcons, productIcons);
  //     break;
  //   case ThemeVariants.SENDGRID:
  //     icons = Object.assign(sendgridIcons, productIcons);
  //     break;
  // }
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

  // Apply filters

  return (
    <div>
      <Header
        label={title}
        description={
          <div>
            For installation and usage, check out the{" "}
            <a href="/">icon component</a>.
          </div>
        }
        breadcrumbs={[<a href="/">Match</a>, <a href="/">Foundations</a>]}
      />

      <TokenFilters />

      {Object.entries(categories).map(([categoryName, childIcons]) => {
        return (
          <div key={`theme-${categoryName}`} className={groupStyle}>
            <h2>{categoryName} icons</h2>
            <p>
              Import {categoryName.toLowerCase()} icons from{" "}
              <span className={inlineCode}>
                @twilio/labs/match/icons/twilio
              </span>
            </p>
            <div className={grid}>
              {Object.entries(childIcons).map(([name, Icon]) => {
                return (
                  <div key={name} className={iconWrapper}>
                    <div>
                      {
                        name.replace(/icon$/i, "")
                        // .replace(/([A-Z])([a-z]+)/g, `$1$2${softHyphen}`)
                      }
                    </div>
                    <div>
                      <Icon
                        className={iconStyle}
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
  );
};
