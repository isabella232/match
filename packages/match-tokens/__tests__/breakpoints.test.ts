import { Breakpoint } from "../src/breakpoints";

describe("Breakpoint", () => {
  test("width static constructor", (): void => {
    // const breakpoint = new Breakpoint({ width: "300px" });
    const breakpoint = Breakpoint.width(300);
    expect(breakpoint.serialize()).toEqual({ width: "300px" });
  });
});
