import styled from "styled-components";
import { compose, variant, space } from "styled-system";
import { FlagSize } from "./constants";
import type { StyledFlagProps } from "./types";

/**
 * Flag styles adapted from react-flagpack:
 * https://github.com/Yummygum/react-flagpack/blob/main/src/Flag.scss
 */
export const StyledFlag = styled.span<StyledFlagProps>`
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ::before {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 2%,
      rgba(255, 255, 255, 0.7) 100%
    );
    border: 1px solid rgba(0, 0, 0, 0.5);
    mix-blend-mode: overlay;
    content: "";
  }

  ${compose(
    space,
    variant({
      prop: "flagSize",
      variants: {
        [FlagSize.SMALL]: {
          width: "16px",
          height: "12px",
          borderRadius: "1px",
          ["&::before"]: {
            borderRadius: "1px",
          },
        },
        [FlagSize.NORMAL]: {
          width: "21.33px",
          height: "16px",
          borderRadius: "1.5px",
          ["::before"]: {
            borderRadius: "1.5px",
          },
        },
        [FlagSize.LARGE]: {
          width: "32px",
          height: "24px",
          borderRadius: "2px",
          ["::before"]: {
            borderRadius: "2px",
          },
        },
      },
    })
  )}
`;
