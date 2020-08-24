/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { useConfig } from "docz";
import { useTheme } from "@twilio-labs/match-themes";
import { MatchContext } from "../../context/match";
import { TokenFilters } from "./filters";
import { BreakpointTokens } from "./breakpoint";
import { SwatchTokens } from "./swatch";
import { ColorToken, BreakpointToken } from "../../types/tokens";

const textSearch = (hayStack: string, needle: string) => {
  return (
    needle.length === 0 ||
    hayStack.toLowerCase().includes(needle.trim().toLowerCase())
  );
};

const Tokens: React.FC = () => {
  const { breakpoint, swatch } = useTheme();
  const {
    themeConfig: { styles },
  } = useConfig();
  const {
    state: { filterText },
  } = React.useContext(MatchContext);

  const breakpointTokens: BreakpointToken[] = React.useMemo(() => {
    return Object.entries(breakpoint).filter(([key]) =>
      textSearch(`breakpoint.${key}`, filterText)
    );
  }, [filterText, breakpoint]);

  console.log(swatch);

  const primaryColorTokens: ColorToken[] = React.useMemo(
    () =>
      Object.entries(swatch)
        .filter(([key]) => ["brand", "brandHighlight", "white"].includes(key))
        .filter(([key]) => textSearch(`swatch.${key}`, filterText)),
    [filterText, swatch]
  );

  const secondaryColorTokens: ColorToken[] = React.useMemo(
    () =>
      Object.entries(swatch)
        .filter(([key]) =>
          [
            "baseBlue",
            "baseGreen",
            "baseOrange",
            "baseYellow",
            "basePurple",
          ].includes(key)
        )
        .filter(([key]) => textSearch(`swatch.${key}`, filterText)),
    [filterText, swatch]
  );

  const tertiaryColorTokens: ColorToken[] = React.useMemo(
    () =>
      Object.entries(swatch)
        .filter(
          ([key]) =>
            ![
              "brand",
              "brandHighlight",
              "white",
              "baseBlue",
              "baseGreen",
              "baseOrange",
              "baseYellow",
              "basePurple",
            ].includes(key)
        )
        .filter(([key]) => textSearch(`swatch.${key}`, filterText)),
    [filterText, swatch]
  );

  const hasColorTokens = Boolean(
    primaryColorTokens.length +
      secondaryColorTokens.length +
      tertiaryColorTokens.length
  );

  const hasAnyTokens = Boolean(
    breakpointTokens.length +
      primaryColorTokens.length +
      secondaryColorTokens.length +
      tertiaryColorTokens.length
  );

  return (
    <div>
      <TokenFilters />

      {!hasAnyTokens && (
        <p sx={{ ...styles.p, textAlign: "center", fontStyle: "italic" }}>
          No tokens found for filter {`"${filterText}"`}
        </p>
      )}

      {breakpointTokens.length > 0 && (
        <div>
          <h1 sx={styles.h1}>Breakpoints</h1>
          <p sx={styles.p}>
            Match takes a mobile-first approach to responsive web design. These
            breakpoints provide ranges needed to ensure that your UI
            communicates valuable information for customers of all screen sizes.
          </p>
          <BreakpointTokens tokens={breakpointTokens} />
        </div>
      )}

      {hasColorTokens && <h1 sx={styles.h1}>Colors</h1>}

      {primaryColorTokens.length > 0 && (
        <div>
          <h2 sx={styles.h2}>Primary</h2>
          <p sx={styles.p}>
            This palette defines our brand. Emphasize Twilio Red and avoid
            introducing too many secondary colors for audiences new to Twilio.
          </p>
          <SwatchTokens tokens={primaryColorTokens} />
        </div>
      )}

      {secondaryColorTokens.length > 0 && (
        <div>
          <h3 sx={styles.h3}>Secondary</h3>
          <p sx={styles.p}>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <SwatchTokens tokens={secondaryColorTokens} />
        </div>
      )}

      {tertiaryColorTokens.length > 0 && (
        <div>
          <h3 sx={styles.h3}>Tertiary</h3>
          <p sx={styles.p}>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <SwatchTokens tokens={tertiaryColorTokens} />
        </div>
      )}
    </div>
  );
};

export { Tokens };
