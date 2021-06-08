import Fuse from "fuse.js";
import * as React from "react";
import { useTheme } from "@twilio-labs/match-themes";
import { MatchContext } from "../../../context/match";
import { Token } from "../../../types";
import { TokenFilters } from "../filters/filters";
import { TokenTable } from "../token-table/token-table";
import { tokenList } from "./token-list.module.css";

type Tokens = { [category: string]: Token[] };

const getTokenTags = (group: string): string[] => {
  switch (group) {
    case "radii":
      return ["border", "radius"];
    case "mediaQueries":
      return ["breakpoint"];
    default:
      return [];
  }
};

export const TokenList: React.FC = () => {
  const theme = useTheme();
  const {
    state: { filterText },
  } = React.useContext(MatchContext);

  const collection = React.useMemo(() => {
    const list = [];
    for (const group in theme) {
      // Exclude single token values
      if (typeof theme[group] !== "object") continue;

      list.push(
        ...Object.entries(theme[group]).map(([name, value]) => ({
          group,
          name,
          value: value as string,
          tags: getTokenTags(group),
        }))
      );
    }
    return list;
  }, [theme]);

  const fuse = React.useMemo(() => {
    return new Fuse(collection, {
      threshold: 0.2,
      keys: ["group", "name", "tags"],
    });
  }, [collection]);

  const tokens: Tokens = React.useMemo(() => {
    let list = collection;

    if (filterText.includes(".") && !filterText.endsWith(".")) {
      const [group, name] = filterText.split(".");
      list = fuse
        .search({
          $and: [{ group }, { name }],
        })
        .map(({ item }: { item: Token }) => item);
    } else if (filterText) {
      list = fuse.search(filterText).map(({ item }: { item: Token }) => item);
    }

    return {
      primaryColors: list.filter(
        ({ group, name }) =>
          group === "colors" &&
          ["brand", "brandHighlight", "white"].includes(name)
      ),
      secondaryColors: list.filter(
        ({ group, name }) =>
          group === "colors" &&
          [
            "baseBlue",
            "baseGreen",
            "baseOrange",
            "baseYellow",
            "basePurple",
          ].includes(name)
      ),
      tertiaryColors: list.filter(
        ({ group, name }) =>
          group === "colors" &&
          ![
            "brand",
            "brandHighlight",
            "white",
            "baseBlue",
            "baseGreen",
            "baseOrange",
            "baseYellow",
            "basePurple",
          ].includes(name)
      ),
      backgroundColors: list.filter(
        ({ group }) => group === "backgroundColors"
      ),
      borderColors: list.filter(({ group }) => group === "borderColors"),
      borderWidths: list.filter(({ group }) => group === "borderWidths"),
      fontFamilies: list.filter(({ group }) => group === "fontFamilies"),
      fontSizes: list.filter(({ group }) => group === "fontSizes"),
      fontWeights: list.filter(({ group }) => group === "fontWeights"),
      gradients: list.filter(({ group }) => group === "gradients"),
      iconSizes: list.filter(({ group }) => group === "iconSizes"),
      lineHeights: list.filter(({ group }) => group === "lineHeights"),
      mediaQueries: list.filter(({ group }) => group === "mediaQueries"),
      radii: list.filter(({ group }) => group === "radii"),
      shadows: list.filter(({ group }) => group === "shadows"),
      space: list.filter(({ group }) => group === "space"),
      textColors: list.filter(({ group }) => group === "textColors"),
    };
  }, [filterText, collection, fuse]);

  const hasColorTokens = Boolean(
    tokens.primaryColors.length +
      tokens.secondaryColors.length +
      tokens.tertiaryColors.length
  );

  const hasAnyTokens = Object.values(tokens).some(
    (tokenArray) => tokenArray.length > 0
  );

  return (
    <div className={tokenList}>
      <TokenFilters tokens={tokens} hasAnyTokens={hasAnyTokens} />

      {!hasAnyTokens && <p>No tokens found for filter {`"${filterText}"`}</p>}

      {tokens.mediaQueries.length > 0 && (
        <>
          <h2 id="media-queries">Breakpoints</h2>
          <p>
            Match takes a mobile-first approach to responsive web design. These
            breakpoints provide ranges needed to ensure that your UI
            communicates valuable information for customers of all screen sizes.
          </p>
          <TokenTable tokens={tokens.mediaQueries} />
        </>
      )}

      {hasColorTokens && <h2 id="colors">Colors</h2>}

      {tokens.primaryColors.length > 0 && (
        <>
          <h3 id="primary-colors">Primary</h3>
          <p>
            This palette defines our brand. Emphasize Twilio Red and avoid
            introducing too many secondary colors for audiences new to Twilio.
          </p>
          <TokenTable tokens={tokens.primaryColors} />
        </>
      )}

      {tokens.secondaryColors.length > 0 && (
        <>
          <h3 id="secondary-colors">Secondary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <TokenTable tokens={tokens.secondaryColors} />
        </>
      )}

      {tokens.tertiaryColors.length > 0 && (
        <>
          <h3 id="tertiary-colors">Tertiary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <TokenTable tokens={tokens.tertiaryColors} />
        </>
      )}

      {tokens.backgroundColors.length > 0 && (
        <>
          <h2 id="background-colors">Background Colors</h2>
          <TokenTable tokens={tokens.backgroundColors} />
        </>
      )}

      {tokens.gradients.length > 0 && (
        <>
          <h2 id="gradients">Gradients</h2>
          <TokenTable tokens={tokens.gradients} />
        </>
      )}

      {tokens.textColors.length > 0 && (
        <>
          <h2 id="text-colors">Text Colors</h2>
          <TokenTable tokens={tokens.textColors} />
        </>
      )}

      {tokens.fontFamilies.length > 0 && (
        <>
          <h2 id="font-families">Font Families</h2>
          <TokenTable tokens={tokens.fontFamilies} />
        </>
      )}

      {tokens.fontSizes.length > 0 && (
        <>
          <h2 id="font-sizes">Font Sizes</h2>
          <TokenTable tokens={tokens.fontSizes} />
        </>
      )}

      {tokens.fontWeights.length > 0 && (
        <>
          <h2 id="font-weights">Font Weights</h2>
          <TokenTable tokens={tokens.fontWeights} />
        </>
      )}

      {tokens.lineHeights.length > 0 && (
        <>
          <h2 id="line-heights">Line Heights</h2>
          <TokenTable tokens={tokens.lineHeights} />
        </>
      )}

      {tokens.shadows.length > 0 && (
        <>
          <h2 id="shadows">Shadows</h2>
          <TokenTable tokens={tokens.shadows} />
        </>
      )}

      {tokens.borderColors.length > 0 && (
        <>
          <h2 id="border-colors">Borders</h2>
          <TokenTable tokens={tokens.borderColors} />
        </>
      )}

      {tokens.borderWidths.length > 0 && (
        <>
          <h2 id="border-widths">Border Widths</h2>
          <TokenTable tokens={tokens.borderWidths} />
        </>
      )}

      {tokens.radii.length > 0 && (
        <>
          <h2 id="radii">Border Radii</h2>
          <TokenTable tokens={tokens.radii} />
        </>
      )}

      {tokens.space.length > 0 && (
        <>
          <h2 id="space">Spacing</h2>
          <TokenTable tokens={tokens.space} />
        </>
      )}

      {tokens.iconSizes.length > 0 && (
        <>
          <h2 id="icon-sizes">Icon Sizes</h2>
          <TokenTable tokens={tokens.iconSizes} />
        </>
      )}
    </div>
  );
};
