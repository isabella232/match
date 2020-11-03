import { Space } from "@twilio-labs/match-props";

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  padding?: Space;
  paddingLeft?: Space;
  paddingRight?: Space;
  paddingBottom?: Space;
  paddingTop?: Space;
  paddingX?: Space;
  paddingY?: Space;
  margin?: Space;
  marginLeft?: Space;
  marginRight?: Space;
  marginBottom?: Space;
  marginTop?: Space;
  marginX?: Space;
  marginY?: Space;
}
