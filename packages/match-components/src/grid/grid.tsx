import * as PropTypes from "prop-types";
import * as React from "react";

import {
  marginPropTypes,
  paddingPropTypes,
  spacePropType,
  backgroundColorPropType,
  responsiveProp,
} from "@twilio-labs/match-props";

import { StyledGrid, StyledCell } from "./styles";
import type { GridProps, CellProps } from "./types";

export const Grid: React.FC<GridProps> = (props) => <StyledGrid {...props} />;

Grid.propTypes = {
  ...marginPropTypes,
  ...paddingPropTypes,
  gridGap: spacePropType,
  gridRowGap: spacePropType,
  gridColumnGap: spacePropType,
  gridAutoFlow: responsiveProp(PropTypes.string),
  gridAutoRows: responsiveProp(PropTypes.string),
  gridAutoColumns: responsiveProp(PropTypes.string),
  gridTemplateRows: responsiveProp(PropTypes.string),
  gridTemplateColumns: responsiveProp(PropTypes.string),
  gridTemplateAreas: responsiveProp(PropTypes.string),
  alignItems: responsiveProp(PropTypes.string),
  alignContent: responsiveProp(PropTypes.string),
  justifyItems: responsiveProp(PropTypes.string),
  justifyContent: responsiveProp(PropTypes.string),
};

Grid.displayName = "Grid";

export const Cell: React.FC<CellProps> = (props) => <StyledCell {...props} />;

Cell.propTypes = {
  ...marginPropTypes,
  ...paddingPropTypes,
  alignSelf: responsiveProp(PropTypes.string),
  justifySelf: responsiveProp(PropTypes.string),
  order: responsiveProp(PropTypes.string),
  gridColumn: responsiveProp(PropTypes.string),
  gridRow: responsiveProp(PropTypes.string),
  gridArea: responsiveProp(PropTypes.string),
  backgroundColor: backgroundColorPropType,
};

Cell.displayName = "Cell";
