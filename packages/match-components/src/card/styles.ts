import { themeGet } from "@styled-system/theme-get";
import styled, { css } from "styled-components";
import { space } from "styled-system";

import { CardVariant } from "./constants";
import type { CardProps } from "./types";

const variants = {
  [CardVariant.PRIMARY]: css`
    border-color: ${({ theme }) => theme.borderColorCard};
    border-style: solid;
    border-width: ${({ theme }) => theme.components.card.borderWidth};
    box-shadow: ${({ theme }) => theme.shadowCard};
  `,
  [CardVariant.INVERSE]: css`
    box-shadow: ${({ theme }) => theme.shadowInverse};
  `,
  [CardVariant.BORDER]: css`
    border-color: ${({ theme }) => theme.borderColorCard};
    border-style: solid;
    border-width: ${({ theme }) => theme.borderWidthThin};
  `,
};

export const StyledCard = styled.div<CardProps>`
  ${space};
  background-color: ${({ theme }) => theme.colorWhite};
  border-radius: ${themeGet("components.card.borderRadius")};
  ${({ variant }) => variant && variants[variant]};
`;
