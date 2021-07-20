import { MarginProps } from "@twilio-labs/match-props";

import { CodeVariant } from "./constants";

export interface CodeProps
  extends MarginProps,
    React.HTMLAttributes<HTMLElement> {
  variant?: `${CodeVariant}`;
}
