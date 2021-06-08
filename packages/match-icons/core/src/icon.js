import styled from "styled-components";
import { color, space, compose, system } from "styled-system";

export const StyledIcon = styled.span`
  display: inline-flex;
  line-height: 1;
  vertical-align: middle;
  ${compose(
    color,
    space,
    system({
      size: {
        properties: ["width", "height"],
        scale: "iconSizes",
      },
    })
  )}
`;
