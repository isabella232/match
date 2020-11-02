import { Unit } from "@twilio-labs/match-tokens-core";
import { BorderWidth } from "@twilio-labs/match-tokens-core";

const borderWidth = new BorderWidth();

export class Card {
  borderWidth = borderWidth.thin;
  borderRadius = Unit.px(3);
}
