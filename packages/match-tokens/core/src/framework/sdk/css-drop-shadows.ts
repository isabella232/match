import { DropShadowsData } from "../prefabs/drop-shadows";
import { colorToCss } from "@diez/web-sdk-common";

/**
 * Returns a string containing a valid CSS value for <box-shadow> and/or <text-shadow> from a [[Shadow]] prefab
 * instance.
 */
export const dropShadowsToCss = (dropShadows: DropShadowsData) => {
  const singleDropShadows = dropShadows.shadows.map((shadow) => {
    return `${shadow.offset.x}px ${shadow.offset.y}px ${
      shadow.radius
    }px ${colorToCss(shadow.color)}`;
  });
  return singleDropShadows.join(", ");
};

/**
 * Returns a string containing a valid CSS <filter> value from a [[Shadow]] prefab instance.
 */
export const dropShadowsToFilterCss = (dropShadows: DropShadowsData) => {
  // Since the `DropShadowData`'s radius value represents double the standard deviation of the desired Guassian blur,
  // and `drop-shadow` expects the standard deviation, the value must be cut in half.
  // See https://css-tricks.com/breaking-css-box-shadow-vs-drop-shadow/#comment-1612592
  const singleDropShadows = dropShadows.shadows.map((shadow) => {
    const radius = shadow.radius / 2;
    return `drop-shadow(${shadow.offset.x}px ${
      shadow.offset.y
    }px ${radius}px ${colorToCss(shadow.color)})`;
  });
  return singleDropShadows.join(", ");
};
