import * as React from "react";
import { useTheme } from "@twilio-labs/match-themes";
import { MatchContext } from "../../context/match";
import { ThemeSwitcher } from "../theme-switcher";
import { TokenFilters } from "./filters";
import { ShadowTokens } from "./shadow";
import { BorderColorTokens } from "./border-color";
import { LineHeightTokens } from "./line-height";

import { remToPx } from "../../utils";

import styles from "./styles.module.css";

import { TokenTable, TokenItem } from "./token-table";
import { hex, score } from "wcag-contrast";

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
    return Object.entries(mediaQueries)
      .filter(([key]) => textSearch(`mediaQueries.${key}`, filterText))
      .map(([key, value]) => ({
        name: key,
        value: value,
      }));
  }, [filterText, mediaQueries]);

  const primaryColorTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(colors)
        .filter(([key]) => ["brand", "brandHighlight", "white"].includes(key))
        .filter(([key]) => textSearch(`colors.${key}`, filterText))
        .map(([key, value]) => ({
          name: key,
          value: value,
          example: (
            <svg height="42" width="150" stroke="#E1E3EA" strokeWidth="1">
              <circle cx="40" cy="21" r="20" fill={value} />
            </svg>
          ),
        })),
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
        .filter(([key]) => textSearch(`colors.${key}`, filterText))
        .map(([key, value]) => ({
          name: key,
          value: value,
          example: (
            <svg height="42" width="150" stroke="#E1E3EA" strokeWidth="1">
              <circle cx="40" cy="21" r="20" fill={value} />
            </svg>
          ),
        })),
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
        .filter(([key]) => textSearch(`colors.${key}`, filterText))
        .map(([key, value]) => ({
          name: key,
          value: value,
          example: (
            <svg height="42" width="150" stroke="#E1E3EA" strokeWidth="1">
              <circle cx="40" cy="21" r="20" fill={value} />
            </svg>
          ),
        })),
    [filterText, colors]
  );

  const fontFamilyTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(fontFamilies)
        .filter(([key]) => textSearch(`fontFamilies.${key}`, filterText))
        .map(([key, value]) => ({
          name: key,
          value: value,
        })),
    [filterText, fontFamilies]
  );

  const fontSizeTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(fontSizes)
        .filter(([key]) => textSearch(`fontSizes.${key}`, filterText))
        .map(([key, value]) => ({
          name: key,
          value: {
            px: remToPx(value),
            rem: value,
          },
          example: <span style={{ fontSize: value }}>Ab</span>,
        })),
    [filterText, fontSizes]
  );

  const fontWeightTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(fontWeights)
        .filter(([key]) => textSearch(`fontWeights.${key}`, filterText))
        .map(([key, value]) => ({
          name: key,
          value: value,
        })),
    [filterText, fontWeights]
  );

  const backgroundColorTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(backgroundColors)
        .filter(([key]) => textSearch(`backgroundColors.${key}`, filterText))
        .map(([key, value]) => ({
          name: key,
          value: value,
          example: (
            <svg height="42" width="150" stroke="#E1E3EA" strokeWidth="1">
              <circle cx="40" cy="21" r="20" fill={value} />
            </svg>
          ),
        })),
    [filterText, backgroundColors]
  );

  const textColorTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(textColors)
        .filter(([key]) => textSearch(`textColors.${key}`, filterText))
        .map(([key, value]) => {
          const bg1 = key.includes("inverse")
            ? backgroundColors.blue
            : backgroundColors.white;
          const bg2 = key.includes("inverse")
            ? backgroundColors.darkest
            : backgroundColors.light;
          return {
            name: key,
            value: value,
            example: (
              <div className={styles.textColorExample}>
                <div
                  style={{
                    color: value,
                    background: bg1,
                  }}
                >
                  {score(hex(value, bg1))}
                </div>
                <div
                  style={{
                    color: value,
                    background: bg2,
                  }}
                >
                  {score(hex(value, bg2))}
                </div>
              </div>
            ),
          };
        }),
    [filterText, textColors]
  );

  const gradientTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(gradients)
        .filter(([key]) => textSearch(`gradients.${key}`, filterText))
        .map(([key, value]) => ({
          name: key,
          value: value.slice(16, -1),
          example: (
            <div
              style={{ background: value }}
              className={styles.rectangleExample}
            ></div>
          ),
        })),
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

  const borderWidthTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(borderWidths)
        .filter(([key]) => textSearch(`borderWidths.${key}`, filterText))
        .map(([key, value]) => ({
          name: key,
          value: {
            px: remToPx(value),
            rem: value,
          },
          example: (
            <div
              className={styles.borderExample}
              style={{ borderWidth: value }}
            />
          ),
        })),
    [filterText, borderWidths]
  );

  const spacingTokens: TokenItem[] = React.useMemo(
    () =>
      Object.entries(space)
        .filter(([key]) => textSearch(`space.${key}`, filterText))
        .map(([key, value]) => ({
          name: key,
          value: {
            px: remToPx(value),
            rem: value,
          },
          example: (
            <div
              className={styles.spacingExample}
              style={{ width: value, height: value }}
            />
          ),
        })),
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
        .map(([key, value]) => ({
          name: key,
          value: {
            px: remToPx(value),
            rem: value,
          },
          example: (
            <div
              className={styles.spacingExample}
              style={{ width: value, height: value }}
            />
          ),
        })),
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
          <TokenTable tokens={primaryColorTokens} prefix="colors" />
        </div>
      )}

      {secondaryColorTokens.length > 0 && (
        <div>
          <h3 id="secondary-colors">Secondary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <TokenTable tokens={secondaryColorTokens} prefix="colors" />
        </div>
      )}

      {tertiaryColorTokens.length > 0 && (
        <div>
          <h3 id="tertiary-colors">Tertiary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <TokenTable tokens={tertiaryColorTokens} prefix="colors" />
        </div>
      )}

      {backgroundColorTokens.length > 0 && (
        <div>
          <h2 id="background-colors">Background Colors</h2>
          <TokenTable
            tokens={backgroundColorTokens}
            prefix="backgroundColors"
          />
        </div>
      )}

      {gradientTokens.length > 0 && (
        <div>
          <h2 id="gradients">Gradients</h2>
          <TokenTable prefix="gradients" tokens={gradientTokens} />
        </div>
      )}

      {textColorTokens.length > 0 && (
        <div>
          <h2 id="text-colors">Text Colors</h2>
          <TokenTable tokens={textColorTokens} prefix="textColors" />
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
          <TokenTable tokens={fontSizeTokens} prefix="fontSize" />
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
          <ShadowTokens prefix="shadows" tokens={shadowTokens} />
        </div>
      )}

      {borderTokens.length > 0 && (
        <div>
          <h2 id="borders">Borders</h2>
          <BorderColorTokens tokens={borderTokens} prefix="borderColors" />
        </div>
      )}

      {borderWidthTokens.length > 0 && (
        <div>
          <h2 id="border-widths">Border Widths</h2>
          <TokenTable tokens={borderWidthTokens} prefix="borderWidths" />
        </div>
      )}

      {spacingTokens.length > 0 && (
        <div>
          <h2 id="spacings">Spacing</h2>
          <TokenTable tokens={spacingTokens} prefix="space" />
        </div>
      )}

      {iconSizeTokens.length > 0 && (
        <div>
          <h2 id="icon-sizes">Icon Sizes</h2>
          <TokenTable tokens={iconSizeTokens} prefix="iconSizes" />
        </div>
      )}
    </div>
  );
};

export { Tokens };
