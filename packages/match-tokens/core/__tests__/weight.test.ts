import { Weight } from "../src/framework/prefabs/weight";

describe("Weight", () => {
  test("num", () => {
    const weight = Weight.num(400);
    expect(weight.serialize()).toEqual(
      expect.objectContaining({ weight: 400 })
    );
  });
});
