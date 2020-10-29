import * as React from "react";
import { spaceTokenProp } from "@twilio-labs/match-props";
import { BoxProps } from "./types";
import { StyledBox } from "./styles";

const Box: React.FC<BoxProps> = ({ ...props }) => {
  return <StyledBox {...props} />;
};

Box.propTypes = {
  padding: spaceTokenProp,
  paddingLeft: spaceTokenProp,
  paddingRight: spaceTokenProp,
  paddingBottom: spaceTokenProp,
  paddingTop: spaceTokenProp,
  margin: spaceTokenProp,
  marginLeft: spaceTokenProp,
  marginRight: spaceTokenProp,
  marginBottom: spaceTokenProp,
  marginTop: spaceTokenProp,
};

export { Box, BoxProps };
