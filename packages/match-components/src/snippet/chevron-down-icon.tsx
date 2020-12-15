import * as React from "react";
import { useUID } from "react-uid";
import { Icon } from "../icon";
import type { IconProps } from "../icon";

const ChevronDownIcon: React.FC<IconProps> = ({
  title,
  decorative,
  ...props
}) => {
  const titleId = useUID();

  if (!decorative && !title) {
    console.warn("[Icon]: Title is required for non-decorative icons.");
  }

  return (
    <Icon {...props}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
        role="img"
        aria-hidden={decorative}
        aria-labelledby={titleId}
      >
        {title && <title id={titleId}>{title}</title>}
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
};

ChevronDownIcon.propTypes = { ...Icon.propTypes };
ChevronDownIcon.defaultProps = { ...Icon.defaultProps };
export { ChevronDownIcon };
