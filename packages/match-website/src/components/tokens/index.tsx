import * as React from "react";
import { useTheme } from "@twilio-labs/match-themes";
import { MatchContext } from "../../context/match";
import { ThemeSwitcher } from "../theme-switcher";
import { TokenFilters } from "./filters";
import { LineHeightTokens } from "./line-height";

import { remToPx } from "../../utils";

import { TokenTable, TokenItem } from "../token-table/token-table";

import { Token } from "../../types";

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
    iconSizes,
  } = useTheme();
  const {
    state: { filterText },
  } = React.useContext(MatchContext);

  const mediaQueryTokens: TokenItem[] = React.useMemo(() => {
    return Object.entries(mediaQueries).filter(([key]) =>
      textSearch(`mediaQueries.${key}`, filterText)
    );
  }, [filterText, mediaQueries]);

  const primaryColorTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(colors)
        .filter(([key]) => ["brand", "brandHighlight", "white"].includes(key))
        .filter(([key]) => textSearch(`colors.${key}`, filterText)),
    [filterText, colors]
  );

  const secondaryColorTokens: TokenItem[] = React.useMemo(
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

  const tertiaryColorTokens: TokenItem[] = React.useMemo(
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

  const fontFamilyTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(fontFamilies).filter(([key]) =>
        textSearch(`fontFamilies.${key}`, filterText)
      ),
    [filterText, fontFamilies]
  );

  const fontSizeTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(fontSizes)
        .filter(([key]) => textSearch(`fontSizes.${key}`, filterText))
        .map(([key, value]) => [
          key,
          {
            px: remToPx(value),
            rem: value,
          },
        ]),
    [filterText, fontSizes]
  );

  const fontWeightTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(fontWeights).filter(([key]) =>
        textSearch(`fontWeights.${key}`, filterText)
      ),
    [filterText, fontWeights]
  );

  const backgroundColorTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(backgroundColors).filter(([key]) =>
        textSearch(`backgroundColors.${key}`, filterText)
      ),
    [filterText, backgroundColors]
  );

  const textColorTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(textColors).filter(([key]) =>
        textSearch(`textColors.${key}`, filterText)
      ),
    [filterText, textColors]
  );

  const gradientTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(gradients)
        .filter(([key]) => textSearch(`gradients.${key}`, filterText))
        .map(([key, value]) => [key, value.slice(16, -1)]),
    [filterText, gradients]
  );

  const shadowTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(shadows).filter(([key]) =>
        textSearch(`shadows.${key}`, filterText)
      ),
    [filterText, shadows]
  );

  const borderTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(borderColors)
        .filter(([key]) => textSearch(`borderColors.${key}`, filterText))
        .map(([key, value]) => [
          key,
          Object.entries(colors).find(
            ([_colorName, colorAlias]) => value === colorAlias
          )?.[0] ?? value,
        ]),
    [filterText, borderColors, colors]
  );

  const borderWidthTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(borderWidths)
        .filter(([key]) => textSearch(`borderWidths.${key}`, filterText))
        .map(([key, value]) => [
          key,
          {
            px: remToPx(value),
            rem: value,
          },
        ]),
    [filterText, borderWidths]
  );

  const spacingTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(space)
        .filter(([key]) => textSearch(`space.${key}`, filterText))
        .map(([key, value]) => [
          key,
          {
            px: remToPx(value),
            rem: value,
          },
        ]),
    [filterText, space]
  );

  const lineHeightTokens: Token[] = React.useMemo(
    () =>
      Object.entries(lineHeights).filter(([key]) =>
        textSearch(`lineHeights.${key}`, filterText)
      ),
    [filterText, lineHeights]
  );

  const iconSizeTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(iconSizes)
        .filter(([key]) => textSearch(`iconSizes.${key}`, filterText))
        .map(([key, value]) => [
          key,
          {
            px: remToPx(value),
            rem: value,
          },
        ]),
    [filterText, iconSizes]
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
      lineHeightTokens.length +
      iconSizeTokens.length
  );

  return (
    <div>
      <ThemeSwitcher noDescription />
      <TokenFilters />

      {!hasAnyTokens && <p>No tokens found for filter {`"${filterText}"`}</p>}

      {mediaQueryTokens.length > 0 && (
        <div>
          <h2 id="breakpoints">Breakpoints</h2>
          <p>
            Match takes a mobile-first approach to responsive web design. These
            breakpoints provide ranges needed to ensure that your UI
            communicates valuable information for customers of all screen sizes.
          </p>
          <TokenTable tokens={mediaQueryTokens} prefix="mediaQueries" />
        </div>
      )}

      {hasColorTokens && <h2 id="colors">Colors</h2>}

      {primaryColorTokens.length > 0 && (
        <div>
          <h3 id="primary-colors">Primary</h3>
          <p>
            This palette defines our brand. Emphasize Twilio Red and avoid
            introducing too many secondary colors for audiences new to Twilio.
          </p>
          <TokenTable
            tokens={primaryColorTokens}
            prefix="colors"
            exampleType="color"
          />
        </div>
      )}

      {secondaryColorTokens.length > 0 && (
        <div>
          <h3 id="secondary-colors">Secondary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <TokenTable
            tokens={secondaryColorTokens}
            prefix="colors"
            exampleType="color"
          />
        </div>
      )}

      {tertiaryColorTokens.length > 0 && (
        <div>
          <h3 id="tertiary-colors">Tertiary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <TokenTable
            tokens={tertiaryColorTokens}
            prefix="colors"
            exampleType="color"
          />
        </div>
      )}

      {backgroundColorTokens.length > 0 && (
        <div>
          <h2 id="background-colors">Background Colors</h2>
          <TokenTable
            tokens={backgroundColorTokens}
            prefix="backgroundColors"
            exampleType="color"
          />
        </div>
      )}

      {gradientTokens.length > 0 && (
        <div>
          <h2 id="gradients">Gradients</h2>
          <TokenTable
            prefix="gradients"
            tokens={gradientTokens}
            exampleType="gradient"
          />
        </div>
      )}

      {textColorTokens.length > 0 && (
        <div>
          <h2 id="text-colors">Text Colors</h2>
          <TokenTable tokens={textColorTokens} exampleType="textColor" />
        </div>
      )}

      {fontFamilyTokens.length > 0 && (
        <div>
          <h2>Font Families</h2>
          <TokenTable prefix="fontFamilies" tokens={fontFamilyTokens} />
        </div>
      )}

      {fontSizeTokens.length > 0 && (
        <div>
          <h2 id="font-sizes">Font Sizes</h2>
          <TokenTable
            tokens={fontSizeTokens}
            prefix="fontSize"
            exampleType="fontSize"
          />
        </div>
      )}

      {fontWeightTokens.length > 0 && (
        <div>
          <h2 id="font-weights">Font Weights</h2>
          <TokenTable prefix="fontWeights" tokens={fontWeightTokens} />
        </div>
      )}

      {lineHeightTokens.length > 0 && (
        <div>
          <h2 id="line-heights">Line Heights</h2>
          <LineHeightTokens prefix="lineHeights" tokens={lineHeightTokens} />
        </div>
      )}

      {shadowTokens.length > 0 && (
        <div>
          <h2 id="shadows">Shadows</h2>
          <TokenTable
            prefix="shadows"
            tokens={shadowTokens}
            exampleType="shadow"
          />
        </div>
      )}

      {borderTokens.length > 0 && (
        <div>
          <h2 id="borders">Borders</h2>
          <TokenTable
            tokens={borderTokens}
            prefix="borderColors"
            exampleType="border"
          />
        </div>
      )}

      {borderWidthTokens.length > 0 && (
        <div>
          <h2 id="border-widths">Border Widths</h2>
          <TokenTable
            tokens={borderWidthTokens}
            prefix="borderWidths"
            exampleType="borderWidth"
          />
        </div>
      )}

      {spacingTokens.length > 0 && (
        <div>
          <h2 id="spacings">Spacing</h2>
          <TokenTable
            tokens={spacingTokens}
            prefix="space"
            exampleType="spacing"
          />
        </div>
      )}

      {iconSizeTokens.length > 0 && (
        <div>
          <h2 id="icon-sizes">Icon Sizes</h2>
          <TokenTable
            tokens={iconSizeTokens}
            prefix="iconSizes"
            exampleType="spacing"
          />
        </div>
      )}
    </div>
  );
};

export { Tokens };
