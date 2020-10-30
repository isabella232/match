import { SpaceOptions } from "@twilio-labs/match-props";

export enum CardVariant {
  PRIMARY = "primary",
  INVERSE = "inverse",
  BORDER = "border",
}

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: CardVariant;
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
