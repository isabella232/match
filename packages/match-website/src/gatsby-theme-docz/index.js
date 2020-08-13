import { ComponentsProvider, theme, useConfig } from "docz";
import baseComponents from "gatsby-theme-docz/src/components";
import defaultConfig from "gatsby-theme-docz/src/theme";
import { merge } from "lodash";
import React from "react";
import { Styled, ThemeProvider } from "theme-ui";
import { Link } from "./custom-components/link";

const componentsMap = {
  ...baseComponents,
  a: Link,
};

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => {
  const config = useConfig();
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={componentsMap}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

const themeConfig = merge(defaultConfig, {
  colors: {
    primary: "#0263E0",
    text: "#050408",
    heading: "#0B0B10",
  },
  styles: {
    h1: {
      fontSize: 36,
      color: "heading",
    },
    p: {
      fontSize: 14,
    },
    table: {
      fontSize: 14,
      width: 778,
    },
    ul: {
      fontSize: 14,
    },
  },
});
// export const matchTheme = theme(themeConfig)(Theme);
// export const matchTheme = (themeConfig, Theme) => theme(themeConfig)(Theme);

export default theme(themeConfig)(Theme);
