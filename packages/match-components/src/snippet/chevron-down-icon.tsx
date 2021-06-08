import * as React from "react";
import { Icon } from "@twilio-labs/match-primitives";
import type { IconProps } from "@twilio-labs/match-primitives";

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      role="img"
      aria-hidden={true}
    >
      <path
        d="M1 5.058l6.619 6.619a.538.538 0 00.762 0L15 5.058"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Icon>
);
