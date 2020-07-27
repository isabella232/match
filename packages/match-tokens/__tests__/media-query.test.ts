import { MediaQuery } from "../src/components/media-query";

describe("Media Query", () => {
  test("width static constructor", (): void => {
    const breakpoint = MediaQuery.minWidth(300);
    expect(breakpoint.serialize()).toEqual({ minWidth: 300 });
  });
});
