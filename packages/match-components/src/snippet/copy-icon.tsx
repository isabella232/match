import * as React from "react";
import { useUID } from "react-uid";
import { Icon } from "../icon";
import type { IconProps } from "../icon";

const CopyIcon: React.FC<IconProps> = ({ title, decorative, ...props }) => {
  const uid = useUID();
  const titleId = title ? uid : undefined;

  if (!decorative && !title) {
    console.warn("[Icon]: Title is required for non-decorative icons.");
  }

  return (
    <Icon {...props}>
      <svg
        height="100%"
        viewBox="0 0 16 16"
        width="100%"
        role="img"
        aria-hidden={decorative}
        aria-labelledby={titleId}
      >
        {title && <title id={titleId}>{title}</title>}
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
};

CopyIcon.propTypes = { ...Icon.propTypes };
CopyIcon.defaultProps = { ...Icon.defaultProps };
export { CopyIcon };
