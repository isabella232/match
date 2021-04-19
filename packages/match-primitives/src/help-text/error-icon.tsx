import * as React from "react";
import { useUID } from "react-uid";
import { Icon } from "../icon";
import type { IconProps } from "../icon";

const ErrorIcon: React.FC<IconProps> = ({
  title,
  decorative,
  ...props
}: IconProps) => {
  const uid = useUID();
  const titleId = title ? uid : undefined;

  if (!decorative && !title) {
    console.warn("[Icon]: Title is required for non-decorative icons.");
  }

  return (
    <Icon {...props}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 12 12"
        fill="none"
        role="img"
        aria-hidden={decorative}
        aria-labelledby={titleId}
      >
        {title && <title id={titleId}>{title}</title>}
        <path
          clipRule="evenodd"
          d="m.375 6c0 1.49184.592632 2.92258 1.64752 3.97748 1.0549 1.05492 2.48564 1.64752 3.97748 1.64752s2.92258-.5926 3.97748-1.64752c1.05492-1.0549 1.64752-2.48564 1.64752-3.97748s-.5926-2.92258-1.64752-3.97748c-1.0549-1.054888-2.48564-1.64752-3.97748-1.64752s-2.92258.592632-3.97748 1.64752c-1.054888 1.0549-1.64752 2.48564-1.64752 3.97748zm5.625-4c.55228 0 1 .44772 1 1v3c0 .55228-.44772 1-1 1s-1-.44772-1-1v-3c0-.55228.44772-1 1-1zm0 8c-.55228 0-1-.44772-1-1 0-.55229.44772-1 1-1s1 .44771 1 1c0 .55228-.44772 1-1 1z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </Icon>
  );
};

ErrorIcon.displayName = "ErrorIcon";

ErrorIcon.defaultProps = { ...Icon.defaultProps };

export { ErrorIcon };
