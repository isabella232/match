import { themeGet } from "@styled-system/theme-get";
import styled, { css } from "styled-components";
import { space } from "styled-system";

import { MarginProps } from "@twilio-labs/match-props";

const trackStyles = css`
  width: 100%;
  height: ${themeGet("space.scale20")};
  background: ${({ theme: { colors } }) =>
    `linear-gradient(to right, ${colors.blue60} 0% var(--progress), ${colors.gray10} var(--progress) 100%)`};
  border-color: ${themeGet("borderColors.card")};
  border-style: solid;
  border-width: ${themeGet("borderWidths.thin")};
  border-radius: ${themeGet("radii.base")};
  cursor: pointer;
  appearance: none;
`;

const trackFocusStyles = css`
  background: ${({ theme: { colors } }) =>
    `linear-gradient(to right, ${colors.blue70} 0% var(--progress), ${colors.gray10} var(--progress) 100%)`};
`;

const trackErrorStyles = css`
  background: ${({ theme: { colors, borderColors } }) =>
    `linear-gradient(to right, ${borderColors.error} 0% var(--progress), ${colors.gray10} var(--progress) 100%)`};
`;

const trackDisabledStyles = css`
  background: ${({ theme: { colors } }) =>
    `linear-gradient(to right, ${colors.gray30} 0% var(--progress), ${colors.gray10} var(--progress) 100%)`};
`;

const thumbStyles = css`
  width: ${themeGet("space.scale180")};
  height: ${themeGet("space.scale180")};
  background: ${themeGet("colors.blue60")};
  border: none;
  border-radius: 50%;
  box-shadow: 0px 1px 4px rgba(18, 28, 45, 0.1);
  cursor: pointer;
  appearance: none;
`;

const thumbHoverStyles = css`
  width: ${themeGet("space.scale260")};
  height: ${themeGet("space.scale260")};
`;

const thumbFocusStyles = css`
  background: ${themeGet("colors.blue70")};
`;

const thumbErrorStyles = css`
  background: ${themeGet("borderColors.error")};
`;

const thumbDisabledStyles = css`
  background: ${themeGet("colors.gray30")};
`;

export const StyledSlider = styled.input`
  display: block;
  width: 100%;
  height: ${themeGet("space.scale260")};
  margin: 0;
  margin-top: ${themeGet("space.scale60")};
  background: transparent;
  appearance: none;

  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--val) - var(--min)) / var(--range));
  --progress: ${({ theme: { space } }) =>
    `calc(${space.scale180} * .5 + var(--ratio) * (100% - ${space.scale180}))`};

  &::-moz-range-track {
    ${trackStyles}
  }
  &::-webkit-slider-runnable-track {
    ${trackStyles}
  }
  &::-ms-track {
    ${trackStyles}
  }

  &::-webkit-slider-thumb {
    ${thumbStyles}
    /**
     * Vertical centering for webkit browsers
     * 1/2 track height minus 1/2 thumb height
     */
    margin-top: ${({ theme }) =>
      `calc(${theme.space.scale20} / 2 - ${theme.space.scale180} / 2)`};
  }
  &::-moz-range-thumb {
    ${thumbStyles}
  }
  &::-ms-thumb {
    ${thumbStyles}
    margin: 0;
  }

  &[aria-invalid="true"] {
    &::-moz-range-thumb {
      ${thumbErrorStyles}
    }
    &::-webkit-slider-thumb {
      ${thumbErrorStyles}
    }
    &::-ms-thumb {
      ${thumbErrorStyles}
    }
    &::-moz-range-track {
      ${trackErrorStyles}
    }
    &::-webkit-slider-runnable-track {
      ${trackErrorStyles}
    }
    &::-ms-track {
      ${trackErrorStyles}
    }
  }

  &:hover,
  &:focus {
    &::-moz-range-thumb {
      ${thumbHoverStyles}
    }
    &::-webkit-slider-thumb {
      ${thumbHoverStyles};
      margin-top: ${({ theme }) =>
        `calc(${theme.space.scale20} / 2 - ${theme.space.scale260} / 2)`};
    }
    &::-ms-thumb {
      ${thumbHoverStyles}
    }
  }

  /* stylelint-disable-next-line a11y/no-outline-none -- focus state indicated by range thumb */
  &:focus {
    outline: none;
    &::-moz-range-thumb {
      ${thumbFocusStyles}
    }
    &::-webkit-slider-thumb {
      ${thumbFocusStyles}
    }
    &::-ms-thumb {
      ${thumbFocusStyles}
    }
    &::-moz-range-track {
      ${trackFocusStyles}
    }
    &::-webkit-slider-runnable-track {
      ${trackFocusStyles}
    }
    &::-ms-track {
      ${trackFocusStyles}
    }
  }

  &[aria-disabled="true"] {
    pointer-events: none;
    &::-moz-range-thumb {
      ${thumbDisabledStyles}
    }
    &::-webkit-slider-thumb {
      ${thumbDisabledStyles}
    }
    &::-ms-thumb {
      ${thumbDisabledStyles}
    }
    &::-moz-range-track {
      ${trackDisabledStyles}
    }
    &::-webkit-slider-runnable-track {
      ${trackDisabledStyles}
    }
    &::-ms-track {
      ${trackDisabledStyles}
    }
  }
`;

export const StyledMinMax = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${themeGet("textColors.secondary")};
  font-weight: ${themeGet("fontWeights.light")};
  font-size: ${themeGet("fontSizes.scale60")};
`;

export const StyledSliderWrapper = styled.div<MarginProps>`
  ${space}

  label {
    pointer-events: none;
  }
`;
