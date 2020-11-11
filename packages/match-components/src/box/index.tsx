import * as React from "react";
import { paddingPropTypes, marginPropTypes } from "@twilio-labs/match-props";
import type { BoxProps } from "./types";
import { StyledBox } from "./styles";

const Box: React.FC<BoxProps> = ({ ...props }) => {
  return <StyledBox {...props} />;
};

Box.propTypes = {
  ...paddingPropTypes,
  ...marginPropTypes,
};

Box.displayName = "Box";

export { Box };
export type { BoxProps };
