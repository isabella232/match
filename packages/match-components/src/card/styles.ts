import styled, { css } from "styled-components";
import { space } from "@twilio-labs/match-styling-library";
import { CardProps, CardVariant } from "./types";
import { Box } from "../box";

const variants = {
  [CardVariant.PRIMARY]: css`
    border-color: ${({ theme }) => theme.border.card.color};
    border-style: solid;
    border-width: ${({ theme }) => theme.card.borderWidth.rem};
    box-shadow: ${({ theme }) => theme.shadow.card.boxShadow};
  `,
  [CardVariant.INVERSE]: css`
    box-shadow: ${({ theme }) => theme.shadow.inverse.boxShadow};
  `,
  [CardVariant.BORDER]: css`
    border-color: ${({ theme }) => theme.border.card.color};
    border-style: solid;
    border-width: ${({ theme }) => theme.borderWidth.thin.rem};
  `,
};

const StyledCard = styled(Box)<CardProps>`
  ${space};
  background-color: ${({ theme }) => theme.swatch.white.color};
  border-radius: ${({ theme }) => theme.card.borderRadius.rem};
  ${({ variant }) => variant && variants[variant]};
`;

export { StyledCard };
