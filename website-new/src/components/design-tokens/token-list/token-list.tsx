import * as React from "react";
import { useTheme } from "@twilio-labs/match-themes";
import Fuse from "fuse.js";
import { MatchContext } from "../../../context/match";
import { TokenFilters } from "../filters/filters";
import { TokenTable } from "../token-table/token-table";
import { Token } from "../../../types";

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
      threshold: 0.4,
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
        .map(({ item }) => item);
    } else if (filterText) {
      list = fuse.search(filterText).map(({ item }) => item);
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
    <div>
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
          <TokenTable tokens={tokens.mediaQueries} />
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
          <TokenTable tokens={tokens.primaryColors} />
        </div>
      )}

      {tokens.secondaryColors.length > 0 && (
        <div>
          <h3 id="secondary-colors">Secondary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <TokenTable tokens={tokens.secondaryColors} />
        </div>
      )}

      {tokens.tertiaryColors.length > 0 && (
        <div>
          <h3 id="tertiary-colors">Tertiary</h3>
          <p>
            We use these colors to help guide attention through a layout or
            illustration.
          </p>
          <TokenTable tokens={tokens.tertiaryColors} />
        </div>
      )}

      {tokens.backgroundColors.length > 0 && (
        <div>
          <h2 id="background-colors">Background Colors</h2>
          <TokenTable tokens={tokens.backgroundColors} />
        </div>
      )}

      {tokens.gradients.length > 0 && (
        <div>
          <h2 id="gradients">Gradients</h2>
          <TokenTable tokens={tokens.gradients} />
        </div>
      )}

      {tokens.textColors.length > 0 && (
        <div>
          <h2 id="text-colors">Text Colors</h2>
          <TokenTable tokens={tokens.textColors} />
        </div>
      )}

      {tokens.fontFamilies.length > 0 && (
        <div>
          <h2>Font Families</h2>
          <TokenTable tokens={tokens.fontFamilies} />
        </div>
      )}

      {tokens.fontSizes.length > 0 && (
        <div>
          <h2 id="font-sizes">Font Sizes</h2>
          <TokenTable tokens={tokens.fontSizes} />
        </div>
      )}

      {tokens.fontWeights.length > 0 && (
        <div>
          <h2 id="font-weights">Font Weights</h2>
          <TokenTable tokens={tokens.fontWeights} />
        </div>
      )}

      {tokens.lineHeights.length > 0 && (
        <div>
          <h2 id="line-heights">Line Heights</h2>
          <TokenTable tokens={tokens.lineHeights} />
        </div>
      )}

      {tokens.shadows.length > 0 && (
        <div>
          <h2 id="shadows">Shadows</h2>
          <TokenTable tokens={tokens.shadows} />
        </div>
      )}

      {tokens.borderColors.length > 0 && (
        <div>
          <h2 id="borders">Borders</h2>
          <TokenTable tokens={tokens.borderColors} />
        </div>
      )}

      {tokens.borderWidths.length > 0 && (
        <div>
          <h2 id="border-widths">Border Widths</h2>
          <TokenTable tokens={tokens.borderWidths} />
        </div>
      )}

      {tokens.radii.length > 0 && (
        <div>
          <h2 id="border-radii">Border Radii</h2>
          <TokenTable tokens={tokens.radii} />
        </div>
      )}

      {tokens.space.length > 0 && (
        <div>
          <h2 id="spacings">Spacing</h2>
          <TokenTable tokens={tokens.space} />
        </div>
      )}

      {tokens.iconSizes.length > 0 && (
        <div>
          <h2 id="icon-sizes">Icon Sizes</h2>
          <TokenTable tokens={tokens.iconSizes} />
        </div>
      )}
    </div>
  );
};
