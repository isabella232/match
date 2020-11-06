import styled from "styled-components";
import { color, system, compose } from "styled-system";
import { IconProps } from "./types";

const StyledIcon = styled("span")<IconProps>`
  ${compose(
    color,
    system({
      size: {
        properties: ["width", "height"],
        scale: "iconSizes",
      },
    })
  )}
  display: inline-block;
  line-height: 1;
`;

export { StyledIcon };
