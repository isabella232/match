import * as React from "react";
import { Icon } from "@twilio-labs/match-primitives";
import type { IconProps } from "@twilio-labs/match-primitives";

export const CopyIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <svg
      height="100%"
      viewBox="0 0 16 16"
      width="100%"
      role="img"
      aria-hidden={true}
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="currentColor" strokeWidth={1.25}>
          <path d="M15 15H3.692V3.692H15z" />
          <path d="M1 11.77V2.076C1 1.482 1.482 1 2.077 1h9.692" />
        </g>
      </g>
    </svg>
  </Icon>
);
