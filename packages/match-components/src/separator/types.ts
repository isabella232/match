import { MarginProps } from "@twilio-labs/match-props";
import { SeparatorVariant } from "./constants";

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLHRElement>,
    MarginProps {
  variant?: `${SeparatorVariant}`;
}
