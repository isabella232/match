import * as React from "react";

import { MarginProps } from "@twilio-labs/match-props";

import { ListVariant, ListSize } from "./constants";

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  additional?: string;
}

export interface ListProps
  extends React.OlHTMLAttributes<HTMLOListElement | HTMLUListElement>,
    MarginProps {
  variant?: `${ListVariant}`;
  size?: `${ListSize}`;
  inverse?: boolean;
}
