import * as React from "react";
import { render } from "@testing-library/react";

import { useMergedRefs } from "../src";

const RefHandler = React.forwardRef((_props, ref) => {
  React.useImperativeHandle(ref, () => "ref handled");
  return <></>;
});

describe("useMergedRefs", () => {
  test("combines two refs", () => {
    const refFunc: React.LegacyRef<string> = jest.fn();
    const refObj: React.RefObject<string> = { current: "" };
    const Component: React.FC = () => {
      return <RefHandler ref={useMergedRefs<string>(refFunc, refObj)} />;
    };
    render(<Component />);
    expect(refFunc).toBeCalledWith("ref handled");
    expect(refObj.current).toEqual("ref handled");
  });

  test("does not update frozen ref", () => {
    const frozenRefObj: React.RefObject<string> = { current: "frozen" };
    Object.freeze(frozenRefObj);
    const refObj: React.RefObject<string> = { current: "" };
    const Component: React.FC = () => {
      return <RefHandler ref={useMergedRefs<string>(frozenRefObj, refObj)} />;
    };
    render(<Component />);
    expect(frozenRefObj.current).toEqual("frozen");
    expect(refObj.current).toEqual("ref handled");
  });
});
