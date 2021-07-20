import { PaddingProps, MarginProps } from "@twilio-labs/match-props";

import { CardVariant } from "./constants";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PaddingProps,
    MarginProps {
  variant?: `${CardVariant}`;
}
