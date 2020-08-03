import { MediaQuery } from "../src/framework/prefabs/media-query";
import { queryToCss } from "../src/framework/sdk/css-media-query";

describe("Media Query", () => {
  test("min width functionality", () => {
    const breakpoint = new MediaQuery({ minWidth: 300 });
    expect(breakpoint.serialize()).toEqual(
      expect.objectContaining({ type: "screen", minWidth: 300 })
    );
  });
});

describe("queriesToCSS", () => {
  test("min width to css", () => {
    expect(queryToCss(new MediaQuery({ minWidth: 300 }))).toBe(
      "screen and (min-width: 300px)"
    );
  });
});
