import * as React from "react";
import { ComponentsProvider, theme, useConfig } from "docz";
import baseComponents from "gatsby-theme-docz/src/components";
import defaultConfig from "gatsby-theme-docz/src/theme";
import { Styled, ThemeProvider } from "theme-ui";
import { MatchProvider } from "../context/match";

const componentsMap = {
  ...baseComponents,
};

const Theme: React.FC = ({ children }) => {
  const config = useConfig();
  return (
    <MatchProvider>
      <ThemeProvider theme={config.themeConfig}>
        <ComponentsProvider components={componentsMap}>
          <Styled.root>{children}</Styled.root>
        </ComponentsProvider>
      </ThemeProvider>
    </MatchProvider>
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
    Container: {
      ...defaultConfig.Container,
      p: 55,
      maxWidth: 778 + 55 * 2,
      marginLeft: 0,
      marginRight: 0,
    },
    a: {
      ...defaultConfig.styles.a,
      textDecoration: "underline",
    },
    h1: {
      ...defaultConfig.styles.h1,
      fontSize: 36,
      color: "heading",
    },
    h2: {
      ...defaultConfig.styles.h2,
      fontSize: 24,
      color: "heading",
      textDecoration: "none",
    },
    h3: {
      ...defaultConfig.styles.h3,
      fontSize: 20,
      color: "heading",
      textDecoration: "none",
    },
    h4: {
      ...defaultConfig.styles.h4,
      fontSize: 16,
      color: "heading",
      textDecoration: "none",
    },
    p: {
      ...defaultConfig.styles.p,
      fontSize: 16,
      textDecoration: "none",
    },
    table: {
      ...defaultConfig.styles.table,
      fontSize: 14,
      textDecoration: "none",
    },
    ul: {
      ...defaultConfig.styles.ul,
      fontSize: 14,
      textDecoration: "none",
    },
    pre: {
      ...defaultConfig.styles.pre,
      fontSize: 14,
      backgroundColor: "#FAFAFA",
    },
  },
};

export default theme(themeConfig)(Theme);
