import * as React from "react";
import { useTheme } from "@twilio-labs/match-themes";
import { MatchContext } from "../../context/match";
import { ThemeSwitcher } from "../theme-switcher";
import { TokenFilters } from "./filters";
import { MediaQueryTokens } from "./media-query";
import { ColorTokens } from "./color";
import { StringTokens } from "./string";
import { WeightTokens } from "./weight";
import { TextColorTokens } from "./text-color";
import { ShadowTokens } from "./shadow";
import { GradientTokens } from "./gradient";
import { BorderColorTokens } from "./border-color";
import { BorderWidthTokens } from "./border-width";
import { SpacingTokens } from "./space";
import { LineHeightTokens } from "./line-height";
import { FontSizeTokens } from "./font-size";

import { Token, NumberToken } from "../../types";

const textSearch = (hayStack: string, needle: string) => {
  return (
    needle.length === 0 ||
    hayStack.toLowerCase().includes(needle.trim().toLowerCase())
  );
};

const Tokens: React.FC = () => {
  const {
    mediaQueries,
    colors,
    fontFamilies,
    fontSizes,
    fontWeights,
    backgroundColors,
    textColors,
    shadows,
    gradients,
    borderColors,
    borderWidths,
    space,
    lineHeights,
  } = useTheme();
  const {
    state: { filterText },
  } = React.useContext(MatchContext);

  const mediaQueryTokens: Token[] = React.useMemo(() => {
    return Object.entries(mediaQueries).filter(([key]) =>
      textSearch(`mediaQueries.${key}`, filterText)
    );
  }, [filterText, mediaQueries]);

  const primaryColorTokens: Token[] = React.useMemo(
    () =>
      Object.entries(colors)
        .filter(([key]) => ["brand", "brandHighlight", "white"].includes(key))
        .filter(([key]) => textSearch(`colors.${key}`, filterText)),
    [filterText, colors]
  );

  const secondaryColorTokens: Token[] = React.useMemo(
    () =>
      Object.entries(colors)
        .filter(([key]) =>
          [
            "baseBlue",
            "baseGreen",
            "baseOrange",
            "baseYellow",
            "basePurple",
          ].includes(key)
        )
        .filter(([key]) => textSearch(`colors.${key}`, filterText)),
    [filterText, colors]
  );

  const tertiaryColorTokens: Token[] = React.useMemo(
    () =>
      Object.entries(colors)
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
        .filter(([key]) => textSearch(`colors.${key}`, filterText)),
    [filterText, colors]
  );

  const fontFamilyTokens: Token[] = React.useMemo(
    () =>
      Object.entries(fontFamilies).filter(([key]) =>
        textSearch(`fontFamilies.${key}`, filterText)
      ),
    [filterText, fontFamilies]
  );

  const fontSizeTokens: Token[] = React.useMemo(
    () =>
      Object.entries(fontSizes).filter(([key]) =>
        textSearch(`fontSizes.${key}`, filterText)
      ),
    [filterText, fontSizes]
  );

  const fontWeightTokens: NumberToken[] = React.useMemo(
    () =>
      Object.entries(fontWeights).filter(([key]) =>
        textSearch(`fontWeights.${key}`, filterText)
      ),
    [filterText, fontWeights]
  );

  const backgroundColorTokens: Token[] = React.useMemo(
    () =>
      Object.entries(backgroundColors).filter(([key]) =>
        textSearch(`backgroundColors.${key}`, filterText)
      ),
    [filterText, backgroundColors]
  );

  const textColorTokens: Token[] = React.useMemo(
    () =>
      Object.entries(textColors).filter(([key]) =>
        textSearch(`textColors.${key}`, filterText)
      ),
    [filterText, textColors]
  );

  const gradientTokens: Token[] = React.useMemo(
    () =>
      Object.entries(gradients).filter(([key]) =>
        textSearch(`gradients.${key}`, filterText)
      ),
    [filterText, gradients]
  );

  const shadowTokens: Token[] = React.useMemo(
    () =>
      Object.entries(shadows).filter(([key]) =>
        textSearch(`shadows.${key}`, filterText)
      ),
    [filterText, shadows]
  );

  const borderTokens: Token[] = React.useMemo(
    () =>
      Object.entries(borderColors).filter(([key]) =>
        textSearch(`borderColors.${key}`, filterText)
      ),
    [filterText, borderColors]
  );

  const borderWidthTokens: Token[] = React.useMemo(
    () =>
      Object.entries(borderWidths).filter(([key]) =>
        textSearch(`borderWidths.${key}`, filterText)
      ),
    [filterText, borderWidths]
  );

  const spacingTokens: Token[] = React.useMemo(
    () =>
      Object.entries(space).filter(([key]) =>
        textSearch(`space.${key}`, filterText)
      ),
    [filterText, space]
  );

  const lineHeightTokens: Token[] = React.useMemo(
    () =>
      Object.entries(lineHeights).filter(([key]) =>
        textSearch(`lineHeights.${key}`, filterText)
      ),
    [filterText, lineHeights]
  );

  const hasColorTokens = Boolean(
    primaryColorTokens.length +
      secondaryColorTokens.length +
      tertiaryColorTokens.length
  );

  const hasAnyTokens = Boolean(
    mediaQueryTokens.length +
      primaryColorTokens.length +
      secondaryColorTokens.length +
      tertiaryColorTokens.length +
      fontFamilyTokens.length +
      fontSizeTokens.length +
      fontWeightTokens.length +
      backgroundColorTokens.length +
      textColorTokens.length +
      gradientTokens.length +
      borderTokens.length +
      borderWidthTokens.length +
      spacingTokens.length +
      lineHeightTokens.length
  );

  return (
    <div>
      <ThemeSwitcher noDescription />
      <TokenFilters />

      {!hasAnyTokens && <p>No tokens found for filter {`"${filterText}"`}</p>}

      {mediaQueryTokens.length > 0 && (
        <div>
          <h1>Breakpoints</h1>
          <p>
            Match takes a mobile-first approach to responsive web design. These
            breakpoints provide ranges needed to ensure that your UI
            communicates valuable information for customers of all screen sizes.
          </p>
          <MediaQueryTokens tokens={mediaQueryTokens} />
        </div>
      )}

      {hasColorTokens && <h1>Colors</h1>}

      {primaryColorTokens.length > 0 && (
        <div>
          <h3>Primary</h3>
          <p>
            This palette defines our brand. Emphasize Twilio Red and avoid
            introducing too many secondary colors for audiences new to Twilio.
          </p>
          <ColorTokens tokens={primaryColorTokens} prefix="colors" />
        </div>
      )}

      {secondaryColorTokens.length > 0 && (
        <div>
          <h3>Secondary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <ColorTokens tokens={secondaryColorTokens} prefix="colors" />
        </div>
      )}

      {tertiaryColorTokens.length > 0 && (
        <div>
          <h3>Tertiary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <ColorTokens tokens={tertiaryColorTokens} prefix="colors" />
        </div>
      )}

      {backgroundColorTokens.length > 0 && (
        <div>
          <h2>Background Colors</h2>
          <ColorTokens
            tokens={backgroundColorTokens}
            prefix="backgroundColors"
          />
        </div>
      )}

      {gradientTokens.length > 0 && (
        <div>
          <h2>Gradients</h2>
          <GradientTokens prefix="gradients" tokens={gradientTokens} />
        </div>
      )}

      {textColorTokens.length > 0 && (
        <div>
          <h2>Text Colors</h2>
          <TextColorTokens tokens={textColorTokens} />
        </div>
      )}

      {fontFamilyTokens.length > 0 && (
        <div>
          <h2>Font Families</h2>
          <StringTokens prefix="fontFamilies" tokens={fontFamilyTokens} />
        </div>
      )}

      {fontSizeTokens.length > 0 && (
        <div>
          <h2>Font Sizes</h2>
          <FontSizeTokens tokens={fontSizeTokens} prefix="fontSize" />
        </div>
      )}

      {fontWeightTokens.length > 0 && (
        <div>
          <h2>Font Weights</h2>
          <WeightTokens prefix="fontWeights" tokens={fontWeightTokens} />
        </div>
      )}

      {lineHeightTokens.length > 0 && (
        <div>
          <h2>Line Heights</h2>
          <LineHeightTokens prefix="lineHeights" tokens={lineHeightTokens} />
        </div>
      )}

      {shadowTokens.length > 0 && (
        <div>
          <h2>Shadows</h2>
          <ShadowTokens prefix="shadows" tokens={shadowTokens} />
        </div>
      )}

      {borderTokens.length > 0 && (
        <div>
          <h2>Borders</h2>
          <BorderColorTokens tokens={borderTokens} prefix="borderColors" />
        </div>
      )}

      {borderWidthTokens.length > 0 && (
        <div>
          <h2>Border Widths</h2>
          <BorderWidthTokens tokens={borderWidthTokens} prefix="borderWidths" />
        </div>
      )}

      {spacingTokens.length > 0 && (
        <div>
          <h2>Spacing</h2>
          <SpacingTokens tokens={spacingTokens} prefix="space" />
        </div>
      )}
    </div>
  );
};

export { Tokens };
