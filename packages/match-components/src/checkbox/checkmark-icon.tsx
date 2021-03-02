import * as React from "react";
import { useUID } from "react-uid";
import { Icon } from "@twilio-labs/match-primitives";
import type { IconProps } from "@twilio-labs/match-primitives";

export const CopyIcon: React.FC<IconProps> = ({
  title,
  decorative,
  ...props
}) => {
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
        viewBox="0 0 8 6"
        fill="none"
        role="img"
        aria-hidden={decorative}
        aria-labelledby={titleId}
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.05532 1.67341C4.32744 2.41412 2.14565 4.63438 2.87352 3.89367C2.89748 3.86929 1.65916 2.34661 1.5744 2.26035C1.40855 2.08971 1.15794 1.98657 0.922073 1.98657C0.695417 1.98657 0.426378 2.08783 0.269746 2.26035C0.109429 2.4385 -0.0103487 2.6729 0.000707722 2.92418C0.0117641 3.17358 0.094687 3.40798 0.269746 3.58801C0.885218 4.2162 1.50069 4.84252 2.11432 5.47072C2.19908 5.55698 2.28569 5.64512 2.37046 5.73138C2.72242 6.08954 3.32131 6.08954 3.67327 5.73138C4.13211 5.26445 4.58911 4.79939 5.04795 4.33247C5.77582 3.59176 6.50186 2.85292 7.22974 2.11221C7.39743 1.94157 7.56327 1.7728 7.73096 1.60215C7.89865 1.43151 8 1.18023 8 0.938327C8 0.707676 7.90049 0.433895 7.73096 0.274502C7.5559 0.111358 7.32556 -0.0105311 7.07863 0.000720198C6.83539 0.0100963 6.60505 0.0944809 6.42999 0.274502C5.97115 0.74143 5.51416 1.20648 5.05532 1.67341Z"
        />
      </svg>
    </Icon>
  );
};

CopyIcon.propTypes = { ...Icon.propTypes };
CopyIcon.defaultProps = { ...Icon.defaultProps };
