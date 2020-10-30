import styled, { css } from "styled-components";
import { space } from "@twilio-labs/match-styling-library";
import { CardProps, CardVariant } from "./types";
import { Box } from "../box";

const variants = {
  [CardVariant.PRIMARY]: css`
    border-color: ${({ theme }) => theme.card.border.color};
    box-shadow: ${({ theme }) => theme.shadow.card.boxShadow};
  `,
  [CardVariant.INVERSE]: css`
    box-shadow: ${({ theme }) => theme.shadow.inverse.boxShadow};
  `,
  [CardVariant.BORDER]: css`
    border-color: ${({ theme }) => theme.border.card.color};
  `,
};

const StyledCard = styled(Box)<CardProps>`
  ${space};
  border-color: ${({ theme }) => theme.card.border};
  ${({ variant }) => variant && variants[variant]};
`;

export { StyledCard };
