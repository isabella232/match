import { SpaceOptions } from "@twilio-labs/match-props";

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  padding?: SpaceOptions;
  paddingLeft?: SpaceOptions;
  paddingRight?: SpaceOptions;
  paddingBottom?: SpaceOptions;
  paddingTop?: SpaceOptions;
  margin?: SpaceOptions;
  marginLeft?: SpaceOptions;
  marginRight?: SpaceOptions;
  marginBottom?: SpaceOptions;
  marginTop?: SpaceOptions;
}
