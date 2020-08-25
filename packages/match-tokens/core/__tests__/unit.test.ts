import { Unit } from "../src/framework/prefabs/unit";
import { unitToPx, unitToRem } from "../src/framework/sdk/css-unit";

describe("Unit", () => {
  test("px", () => {
    const size = Unit.px(24);
    expect(size.serialize()).toEqual(expect.objectContaining({ pixels: 24 }));
  });
  test("rem", () => {
    const size = Unit.rem(1);
    expect(size.serialize()).toEqual(expect.objectContaining({ pixels: 16 }));
  });
});

describe("unit sdk", () => {
  test("unitToPx", () => {
    expect(unitToPx(Unit.px(16))).toBe("16px");
  });
  test("unitToRem", () => {
    expect(unitToRem(Unit.rem(1))).toBe("1rem");
  });
});
