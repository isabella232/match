import * as React from "react";
import { useTheme } from "@twilio-labs/match-themes";
import { MatchContext } from "../../context/match";
import { TokenFilters } from "./filters";
import { BreakpointTokens } from "./breakpoint";
import { SwatchTokens } from "./swatch";
import { StringTokens } from "./string";
import { UnitTokens } from "./unit";
import { WeightTokens } from "./weight";
import { TextColorTokens } from "./text-color";
import { GradientTokens } from "./gradient";
import {
  ColorToken,
  BreakpointToken,
  StringToken,
  UnitToken,
  WeightToken,
  GradientToken,
} from "../../types/tokens";

const textSearch = (hayStack: string, needle: string) => {
  return (
    needle.length === 0 ||
    hayStack.toLowerCase().includes(needle.trim().toLowerCase())
  );
};

const Tokens: React.FC = () => {
  const {
    breakpoint,
    swatch,
    fontFamily,
    fontSize,
    fontWeight,
    background,
    text,
    gradient,
  } = useTheme();
  const {
    state: { filterText },
  } = React.useContext(MatchContext);

  const breakpointTokens: BreakpointToken[] = React.useMemo(() => {
    return Object.entries(breakpoint).filter(([key]) =>
      textSearch(`breakpoint.${key}`, filterText)
    );
  }, [filterText, breakpoint]);

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

  const fontFamilyTokens: StringToken[] = React.useMemo(
    () =>
      Object.entries(fontFamily).filter(([key]) =>
        textSearch(`fontFamily.${key}`, filterText)
      ),
    [filterText, fontFamily]
  );

  const fontSizeTokens: UnitToken[] = React.useMemo(
    () =>
      Object.entries(fontSize).filter(([key]) =>
        textSearch(`fontSize.${key}`, filterText)
      ),
    [filterText, fontSize]
  );

  const fontWeightTokens: WeightToken[] = React.useMemo(
    () =>
      Object.entries(fontWeight).filter(([key]) =>
        textSearch(`fontWeight.${key}`, filterText)
      ),
    [filterText, fontWeight]
  );

  const backgroundColorTokens: ColorToken[] = React.useMemo(
    () =>
      Object.entries(background)
        .filter(([key]) => ["white", "blue", "light", "darkest"].includes(key))
        .filter(([key]) => textSearch(`background.${key}`, filterText)),
    [filterText, background]
  );

  const textColorTokens: ColorToken[] = React.useMemo(
    () =>
      Object.entries(text)
        .filter(([key]) =>
          ["primary", "secondary", "tertiary", "inversePrimary"].includes(key)
        )
        .filter(([key]) => textSearch(`text.${key}`, filterText)),
    [filterText, text]
  );

  const gradientTokens: GradientToken[] = React.useMemo(
    () =>
      Object.entries(gradient).filter(([key]) =>
        textSearch(`gradient.${key}`, filterText)
      ),
    [filterText, gradient]
  );

  const hasColorTokens = Boolean(
    primaryColorTokens.length +
      secondaryColorTokens.length +
      tertiaryColorTokens.length +
      backgroundColorTokens.length +
      textColorTokens.length
  );

  const hasAnyTokens = Boolean(
    breakpointTokens.length +
      primaryColorTokens.length +
      secondaryColorTokens.length +
      tertiaryColorTokens.length +
      fontFamilyTokens.length +
      fontSizeTokens.length +
      fontWeightTokens.length +
      backgroundColorTokens.length +
      textColorTokens.length +
      gradientTokens.length
  );

  return (
    <div>
      <TokenFilters />

      {!hasAnyTokens && <p>No tokens found for filter {`"${filterText}"`}</p>}

      {breakpointTokens.length > 0 && (
        <div>
          <h1>Breakpoints</h1>
          <p>
            Match takes a mobile-first approach to responsive web design. These
            breakpoints provide ranges needed to ensure that your UI
            communicates valuable information for customers of all screen sizes.
          </p>
          <BreakpointTokens tokens={breakpointTokens} />
        </div>
      )}

      {hasColorTokens && <h1>Colors</h1>}

      {primaryColorTokens.length > 0 && (
        <div>
          <h2>Primary</h2>
          <p>
            This palette defines our brand. Emphasize Twilio Red and avoid
            introducing too many secondary colors for audiences new to Twilio.
          </p>
          <SwatchTokens tokens={primaryColorTokens} prefix="swatch" />
        </div>
      )}

      {secondaryColorTokens.length > 0 && (
        <div>
          <h3>Secondary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <SwatchTokens tokens={secondaryColorTokens} prefix="swatch" />
        </div>
      )}

      {tertiaryColorTokens.length > 0 && (
        <div>
          <h3>Tertiary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <SwatchTokens tokens={tertiaryColorTokens} prefix="swatch" />
        </div>
      )}

      {backgroundColorTokens.length > 0 && (
        <div>
          <h2>Background Colors</h2>
          <SwatchTokens tokens={backgroundColorTokens} prefix="background" />
        </div>
      )}

      {gradientTokens.length > 0 && (
        <div>
          <h2>Gradients</h2>
          <GradientTokens prefix="gradient" tokens={gradientTokens} />
        </div>
      )}

      {textColorTokens.length > 0 && (
        <div>
          <h2>Text Colors</h2>
          <TextColorTokens
            tokens={textColorTokens}
            bgLight={background.light.color}
            bgDarkest={background.darkest.color}
            bgColor={background.blue.color}
            bgWhite={background.white.color}
          />
        </div>
      )}

      {fontFamilyTokens.length > 0 && (
        <div>
          <h2>Font Families</h2>
          <StringTokens prefix="fontFamily" tokens={fontFamilyTokens} />
        </div>
      )}

      {fontSizeTokens.length > 0 && (
        <div>
          <h2>Font Sizes</h2>
          <UnitTokens tokens={fontSizeTokens} />
        </div>
      )}

      {fontWeightTokens.length > 0 && (
        <div>
          <h2>Font Weights</h2>
          <WeightTokens prefix="fontWeight" tokens={fontWeightTokens} />
        </div>
      )}
    </div>
  );
};

export { Tokens };
