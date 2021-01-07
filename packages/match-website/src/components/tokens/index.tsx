import * as React from "react";
import { useTheme } from "@twilio-labs/match-themes";
import { MatchContext } from "../../context/match";
import { ThemeSwitcher } from "../theme-switcher";
import { TokenFilters } from "./filters";
import { LineHeightTokens } from "./line-height";

import { remToPx } from "../../utils";

import { TokenTable } from "../token-table/token-table";

import { Token } from "../../types";

type Tokens = { [category: string]: Token[] };

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

  const tokens: Tokens = React.useMemo(
    () => ({
      primaryColors: Object.entries(colors)
        .filter(([key]) => ["brand", "brandHighlight", "white"].includes(key))
        .filter(([key]) => textSearch(`colors.${key}`, filterText)),
      secondaryColors: Object.entries(colors)
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
      tertiaryColors: Object.entries(colors)
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
      backgroundColors: Object.entries(backgroundColors).filter(([key]) =>
        textSearch(`backgroundColors.${key}`, filterText)
      ),
      borderColors: Object.entries(borderColors)
        .filter(([key]) => textSearch(`borderColors.${key}`, filterText))
        .map(([key, value]) => [
          key,
          Object.entries(colors).find(
            ([_colorName, colorAlias]) => value === colorAlias
          )?.[0] ?? value,
        ]),
      borderWidths: Object.entries(borderWidths)
        .filter(([key]) => textSearch(`borderWidths.${key}`, filterText))
        .map(([key, value]) => [
          key,
          {
            px: remToPx(value),
            rem: value,
          },
        ]),
      fontFamilies: Object.entries(fontFamilies).filter(([key]) =>
        textSearch(`fontFamilies.${key}`, filterText)
      ),
      fontSizes: Object.entries(fontSizes)
        .filter(([key]) => textSearch(`fontSizes.${key}`, filterText))
        .map(([key, value]) => [
          key,
          {
            px: remToPx(value),
            rem: value,
          },
        ]),
      fontWeights: Object.entries(fontWeights).filter(([key]) =>
        textSearch(`fontWeights.${key}`, filterText)
      ),
      gradients: Object.entries(gradients)
        .filter(([key]) => textSearch(`gradients.${key}`, filterText))
        .map(([key, value]) => [key, value.slice(16, -1)]),
      iconSizes: Object.entries(iconSizes)
        .filter(([key]) => textSearch(`iconSizes.${key}`, filterText))
        .map(([key, value]) => [
          key,
          {
            px: remToPx(value),
            rem: value,
          },
        ]),
      lineHeights: Object.entries(lineHeights).filter(([key]) =>
        textSearch(`lineHeights.${key}`, filterText)
      ),
      mediaQueries: Object.entries(mediaQueries).filter(([key]) =>
        textSearch(`mediaQueries.${key}`, filterText)
      ),
      shadows: Object.entries(shadows).filter(([key]) =>
        textSearch(`shadows.${key}`, filterText)
      ),
      space: Object.entries(space)
        .filter(([key]) => textSearch(`space.${key}`, filterText))
        .map(([key, value]) => [
          key,
          {
            px: remToPx(value),
            rem: value,
          },
        ]),
      textColors: Object.entries(textColors).filter(([key]) =>
        textSearch(`textColors.${key}`, filterText)
      ),
    }),
    [filterText]
  );

  const hasColorTokens = Boolean(
    tokens.primaryColors.length +
      tokens.secondaryColors.length +
      tokens.tertiaryColors.length
  );

  const hasAnyTokens = Object.values(tokens).some(
    (tokenArray) => tokenArray.length > 0
  );

  return (
    <div>
      <ThemeSwitcher noDescription />
      <TokenFilters />

      {!hasAnyTokens && <p>No tokens found for filter {`"${filterText}"`}</p>}

      {tokens.mediaQueries.length > 0 && (
        <div>
          <h2 id="breakpoints">Breakpoints</h2>
          <p>
            Match takes a mobile-first approach to responsive web design. These
            breakpoints provide ranges needed to ensure that your UI
            communicates valuable information for customers of all screen sizes.
          </p>
          <TokenTable tokens={tokens.mediaQueries} prefix="mediaQueries" />
        </div>
      )}

      {hasColorTokens && <h2 id="colors">Colors</h2>}

      {tokens.primaryColors.length > 0 && (
        <div>
          <h3 id="primary-colors">Primary</h3>
          <p>
            This palette defines our brand. Emphasize Twilio Red and avoid
            introducing too many secondary colors for audiences new to Twilio.
          </p>
          <TokenTable
            tokens={tokens.primaryColors}
            prefix="colors"
            exampleType="color"
          />
        </div>
      )}

      {tokens.secondaryColors.length > 0 && (
        <div>
          <h3 id="secondary-colors">Secondary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <TokenTable
            tokens={tokens.secondaryColors}
            prefix="colors"
            exampleType="color"
          />
        </div>
      )}

      {tokens.tertiaryColors.length > 0 && (
        <div>
          <h3 id="tertiary-colors">Tertiary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <TokenTable
            tokens={tokens.tertiaryColors}
            prefix="colors"
            exampleType="color"
          />
        </div>
      )}

      {tokens.backgroundColors.length > 0 && (
        <div>
          <h2 id="background-colors">Background Colors</h2>
          <TokenTable
            tokens={tokens.backgroundColors}
            prefix="backgroundColors"
            exampleType="color"
          />
        </div>
      )}

      {tokens.gradients.length > 0 && (
        <div>
          <h2 id="gradients">Gradients</h2>
          <TokenTable
            prefix="gradients"
            tokens={tokens.gradients}
            exampleType="gradient"
          />
        </div>
      )}

      {tokens.textColors.length > 0 && (
        <div>
          <h2 id="text-colors">Text Colors</h2>
          <TokenTable tokens={tokens.textColors} exampleType="textColor" />
        </div>
      )}

      {tokens.fontFamilies.length > 0 && (
        <div>
          <h2>Font Families</h2>
          <TokenTable prefix="fontFamilies" tokens={tokens.fontFamilies} />
        </div>
      )}

      {tokens.fontSizes.length > 0 && (
        <div>
          <h2 id="font-sizes">Font Sizes</h2>
          <TokenTable
            tokens={tokens.fontSizes}
            prefix="fontSize"
            exampleType="fontSize"
          />
        </div>
      )}

      {tokens.fontWeights.length > 0 && (
        <div>
          <h2 id="font-weights">Font Weights</h2>
          <TokenTable prefix="fontWeights" tokens={tokens.fontWeights} />
        </div>
      )}

      {tokens.lineHeights.length > 0 && (
        <div>
          <h2 id="line-heights">Line Heights</h2>
          <LineHeightTokens prefix="lineHeights" tokens={tokens.lineHeights} />
        </div>
      )}

      {tokens.shadows.length > 0 && (
        <div>
          <h2 id="shadows">Shadows</h2>
          <TokenTable
            prefix="shadows"
            tokens={tokens.shadows}
            exampleType="shadow"
          />
        </div>
      )}

      {tokens.borderColors.length > 0 && (
        <div>
          <h2 id="borders">Borders</h2>
          <TokenTable
            tokens={tokens.borderColors}
            prefix="borderColors"
            exampleType="border"
          />
        </div>
      )}

      {tokens.borderWidths.length > 0 && (
        <div>
          <h2 id="border-widths">Border Widths</h2>
          <TokenTable
            tokens={tokens.borderWidths}
            prefix="borderWidths"
            exampleType="borderWidth"
          />
        </div>
      )}

      {tokens.space.length > 0 && (
        <div>
          <h2 id="spacings">Spacing</h2>
          <TokenTable
            tokens={tokens.space}
            prefix="space"
            exampleType="spacing"
          />
        </div>
      )}

      {tokens.iconSizes.length > 0 && (
        <div>
          <h2 id="icon-sizes">Icon Sizes</h2>
          <TokenTable
            tokens={tokens.iconSizes}
            prefix="iconSizes"
            exampleType="spacing"
          />
        </div>
      )}
    </div>
  );
};

export { Tokens };
