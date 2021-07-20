import Fuse from "fuse.js";
import * as React from "react";

import type { IconType } from "@twilio-labs/match-icons/src";
import * as productIcons from "@twilio-labs/match-icons/product";
import * as sendgridIcons from "@twilio-labs/match-icons/sendgrid";
import * as twilioIcons from "@twilio-labs/match-icons/twilio";
import { ThemeVariants } from "@twilio-labs/match-themes";

import { MatchContext } from "../../../context/match";
import { IconItem } from "../../../types";
import { Copy } from "../../common/copy";
import { IconFilters } from "../filters/filters";

import { iconMetadata } from "./icon-metadata";
import {
  copyButton,
  grid,
  groupStyle,
  iconList,
  iconWrapper,
  iconStyle,
  inlineCode,
} from "./icons.module.css";

type IconsType = { [category: string]: IconItem[] };

export const Icons: React.FC = () => {
  const {
    state: { filterText, theme },
  } = React.useContext(MatchContext);

  // Parse out icon categories
  const collection = React.useMemo(() => {
    // Get all available icons based on theme
    let themeIcons: {
      [iconName: string]: IconType;
    };

    switch (theme) {
      case ThemeVariants.SENDGRID:
        themeIcons = Object.assign(sendgridIcons, productIcons);
        break;
      case ThemeVariants.TWILIO:
      default:
        themeIcons = Object.assign(twilioIcons, productIcons);
        break;
    }

    const list = [];
    for (const iconName in themeIcons) {
      const iconComponent = themeIcons[iconName];
      const metadata = iconMetadata[iconName];
      if (metadata && metadata.category) {
        list.push({
          name: iconName,
          category: metadata.category,
          icon: iconComponent,
        });
      } else {
        console.error(`Metadata not found for icon "${iconName}"`);
      }
    }

    return list;
  }, [theme]);

  const fuse = React.useMemo(() => {
    return new Fuse(collection, {
      threshold: 0.2,
      keys: ["category", "name"],
    });
  }, [collection]);

  const icons: IconsType = React.useMemo(() => {
    let list = collection;
    const filtered = {};

    if (filterText) {
      list = fuse.search(filterText).map(({ item }) => item);
    }

    for (const value in list) {
      // Create if !exists
      if (!filtered[list[value].category]) {
        filtered[list[value].category] = [];
      }

      filtered[list[value].category].push(list[value]);
    }

    return filtered;
  }, [filterText, collection, fuse]);

  const hasAnyIcons = Object.values(icons).some(
    (iconArray) => iconArray.length > 0
  );

  return (
    <div className={iconList}>
      <IconFilters icons={icons} hasAnyIcons={hasAnyIcons} />

      {!hasAnyIcons && <p>No icons found for filter {`"${filterText}"`}</p>}

      {Object.entries(icons)
        .sort()
        .map(([categoryName, childIcons]) => {
          const categoryNameLower = categoryName.toLowerCase();
          const iconPackageName =
            categoryNameLower === "product"
              ? "@twilio-labs/match-icons/product"
              : `@twilio-labs/match-icons/${theme.toLowerCase()}`;
          return (
            <div key={`${theme}.${categoryName}`} className={groupStyle}>
              <h2 id={categoryNameLower}>{categoryName} icons</h2>
              <p>
                Import {categoryNameLower} icons from{" "}
                <Copy value={iconPackageName} className={copyButton}>
                  <span className={inlineCode}>{iconPackageName}</span>
                </Copy>
              </p>
              <div className={grid}>
                {childIcons.map((meta) => {
                  const name = meta.name;
                  const Icon = meta.icon;
                  return (
                    <div
                      key={`${categoryName}.${name}`}
                      className={iconWrapper}
                    >
                      <Copy
                        token={`<${name} />`}
                        value={`<${name} />`}
                        className={copyButton}
                      >
                        <div>{name.replace(/icon$/i, "")}</div>
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
                      </Copy>
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
