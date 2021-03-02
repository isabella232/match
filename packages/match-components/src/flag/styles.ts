import styled from "styled-components";
import { compose, variant, space } from "styled-system";
import { FlagSize } from "./constants";
import type { StyledFlagProps } from "./types";

export const StyledFlag = styled.img<StyledFlagProps>`
  width: auto;
  vertical-align: middle;
  ${compose(
    space,
    variant({
      prop: "flagSize",
      variants: {
        [FlagSize.SMALL]: {
          height: "12px",
        },
        [FlagSize.NORMAL]: {
          height: "16px",
        },
        [FlagSize.LARGE]: {
          height: "24px",
        },
      },
    })
  )}
`;
