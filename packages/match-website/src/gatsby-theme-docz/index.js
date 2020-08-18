import { ComponentsProvider, theme, useConfig } from "docz";
import baseComponents from "gatsby-theme-docz/src/components";
import defaultConfig from "gatsby-theme-docz/src/theme";
import React from "react";
import { Styled, ThemeProvider } from "theme-ui";

const componentsMap = {
  ...baseComponents,
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

const themeConfig = {
  ...defaultConfig,
  colors: {
    ...defaultConfig.colors,
    primary: "#0263E0",
    text: "#050408",
    heading: "#0B0B10",
  },
  styles: {
    ...defaultConfig.styles,
    h1: {
      ...defaultConfig.styles.h1,
      fontSize: 36,
      color: "heading",
    },
    p: {
      ...defaultConfig.styles.p,
      fontSize: 16,
      width: 778,
    },
    table: {
      ...defaultConfig.styles.table,
      fontSize: 14,
      width: 778,
    },
    ul: {
      ...defaultConfig.styles.ul,
      fontSize: 14,
    },
    pre: {
      ...defaultConfig.styles.pre,
      fontSize: 14,
      width: 778,
    },
    a: {
      ...defaultConfig.styles.a,
      textDecoration: "underline",
    },
  },
};
// export const matchTheme = theme(themeConfig)(Theme);
// export const matchTheme = (themeConfig, Theme) => theme(themeConfig)(Theme);

export default theme(themeConfig)(Theme);
