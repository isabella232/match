import * as React from "react";
import { Icon } from "@twilio-labs/match-primitives";
import type { IconProps } from "@twilio-labs/match-primitives";

export const GithubIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <svg
      height="100%"
      viewBox="0 0 18 18"
      width="100%"
      role="img"
      aria-hidden={true}
    >
      <path
        d="M10.763 16.638c0 .114.053.221.143.29a.35.35 0 00.312.058c3.83-1.127 6.26-4.954 5.703-8.975C16.362 3.989 12.985 1 9 1 5.015 1 1.638 3.99 1.08 8.01c-.559 4.022 1.873 7.85 5.702 8.976a.35.35 0 00.312-.058.365.365 0 00.143-.29v-1.703a1.99 1.99 0 01-2.454-1.247 4.417 4.417 0 00-.967-1.652c2.027.5 2.062 1.84 3.442 1.21.042-.47.195-.923.448-1.319-1.564-.18-3.214-.435-3.214-3.188a2.814 2.814 0 01.711-1.928 2.626 2.626 0 01.071-1.899s.59-.195 1.941.725a6.556 6.556 0 013.556 0c1.343-.928 1.934-.725 1.934-.725.26.601.285 1.28.07 1.899.471.526.726 1.216.712 1.928 0 2.76-1.65 3.007-3.221 3.181.336.495.506 1.087.483 1.688z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
      />
    </svg>
  </Icon>
);
