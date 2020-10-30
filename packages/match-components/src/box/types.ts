import {
  ColorOptions,
  SpaceOptions,
  ShadowOptions,
} from "@twilio-labs/match-props";

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  padding?: SpaceOptions;
  paddingLeft?: SpaceOptions;
  paddingRight?: SpaceOptions;
  paddingBottom?: SpaceOptions;
  paddingTop?: SpaceOptions;
  paddingX?: SpaceOptions;
  paddingY?: SpaceOptions;
  margin?: SpaceOptions;
  marginLeft?: SpaceOptions;
  marginRight?: SpaceOptions;
  marginBottom?: SpaceOptions;
  marginTop?: SpaceOptions;
  marginX?: SpaceOptions;
  marginY?: SpaceOptions;
  boxShadow?: ShadowOptions;
  borderColor?: ColorOptions;
}
