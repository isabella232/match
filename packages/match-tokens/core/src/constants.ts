export const REM_CATEGORIES = [
  "borderRadius",
  "borderWidth",
  "fontSize",
  "iconSize",
  "space",
];
export const COLOR_CATEGORIES = [
  "color",
  "borderColor",
  "backgroundColor",
  "textColor",
];
export const GROUP_NAME_MAP = new Map(
  Object.entries({
    color: "colors",
    backgroundColor: "backgroundColors",
    borderColor: "borderColors",
    borderRadius: "radii",
    borderWidth: "borderWidths",
    component: "components",
    fontFamily: "fontFamilies",
    fontSize: "fontSizes",
    fontWeight: "fontWeights",
    gradient: "gradients",
    iconSize: "iconSizes",
    shadow: "shadows",
    space: "space",
    textColor: "textColors",
    mediaQuery: "mediaQueries",
    lineHeight: "lineHeights",
  })
);
