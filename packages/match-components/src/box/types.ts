import { MarginProps, PaddingProps } from "@twilio-labs/match-props";

export interface BoxProps
  extends React.HTMLAttributes<HTMLElement>,
    MarginProps,
    PaddingProps {}
